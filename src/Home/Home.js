import React, { useContext } from "react";
import OriginalPosterList from "../OriginalPosterList/OriginalPosterList";
import TrendingPosterList from "../TrendingPosterList/TrendingPosterList";
import UserContext from "../context/UserContext";
import "./Home.css";

const Home = () => {
  const username = useContext(UserContext);

  return (
    <div>
      <div>Welcome {username}!</div>
      <OriginalPosterList />
      <TrendingPosterList />
    </div>
  );
};

export default Home;
