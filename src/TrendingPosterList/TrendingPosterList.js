import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const POSTER_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const API_BASE_URL = "https://api.themoviedb.org/3";

const TrendingPosterList = () => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    async function getTrendingNow() {
      const url = new URL(`${API_BASE_URL}/trending/all/week`);
      url.search = new URLSearchParams({
        api_key: "bae0d6e59a93e166f73ccf08386c4416",
        language: "en-US",
      }).toString();
      // console.log(url);
      const res = await fetch(url);
      // console.log(res);
      const moviesData = res.json();
      // console.log(moviesData);
      return moviesData;
    }

    getTrendingNow().then((moviesData) => {
      setPosters(moviesData.results);
      console.log(moviesData.results);
    });
  }, []);

  function appendImageBaseUrl(imagePath) {
    return `${POSTER_IMAGE_BASE_URL}${imagePath}`;
  }

  // const movies = posters.map((poster) => (
  //   <Link
  //     to={{
  //       pathname: `shows/${poster.id}/${poster.name
  //         .toLowerCase()
  //         .split(" ")
  //         .join("_")}`,
  //       state: {
  //         poster,
  //         backdrop: appendImageBaseUrl(poster.backdrop_path),
  //       },
  //     }}
  //     exact
  //   >
  //     <img
  //       className="poster"
  //       src={appendImageBaseUrl(poster.poster_path)}
  //       alt={poster.name}
  //       key={poster.id}
  //     ></img>
  //   </Link>
  // ));
  const movies = posters.map((poster) => (
    <div>
      <a href={appendImageBaseUrl(poster.backdrop_path)}>
        <img
          className="poster"
          src={appendImageBaseUrl(poster.poster_path)}
          alt={poster.name}
          key={poster.id}
        ></img>
      </a>
    </div>
  ));

  return (
    <div>
      <h2>Trending Now</h2>
      <div className="poster__list">{movies}</div>
    </div>
  );
};

export default TrendingPosterList;
