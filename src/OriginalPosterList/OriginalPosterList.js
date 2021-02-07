import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const POSTER_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const API_BASE_URL = "https://api.themoviedb.org/3";
const NETFLIX_NETWORK_ID = "213";

const OriginalPosterlist = () => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    async function getNetflixOriginals() {
      const url = new URL(`${API_BASE_URL}/discover/tv`);
      url.search = new URLSearchParams({
        api_key: "bae0d6e59a93e166f73ccf08386c4416",
        with_networks: NETFLIX_NETWORK_ID,
      }).toString();
      // console.log(url);
      const res = await fetch(url);
      // console.log(res);
      const moviesData = res.json();

      return moviesData;
    }

    getNetflixOriginals().then((moviesData) => {
      setPosters(moviesData.results);
      console.log(moviesData.results);
    });
  }, []);

  function appendImageBaseUrl(imagePath) {
    return `${POSTER_IMAGE_BASE_URL}${imagePath}`;
  }

  const movies = posters.map((poster) => (
    <Link
      to={{
        pathname: `shows/${poster.id}/${poster.name
          .toLowerCase()
          .split(" ")
          .join("_")}`,
        state: {
          poster,
          backdrop: appendImageBaseUrl(poster.backdrop_path),
        },
      }}
      exact
    >
      <img
        className="poster"
        src={appendImageBaseUrl(poster.poster_path)}
        alt={poster.name}
        key={poster.id}
      ></img>
    </Link>
  ));

  return (
    <div>
      <h2>NetFlix originals</h2>
      <div className="poster__list">{movies}</div>
    </div>
  );
};

export default OriginalPosterlist;

// const url = new URL("https://api.themoviedb.org/3/discover/tv");
//       url.search = new URLSearchParams({
//         api_key: "bae0d6e59a93e166f73ccf08386c4416",
//         with_networks: 213,
//       }).toString();

//       window.fetch(url, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
