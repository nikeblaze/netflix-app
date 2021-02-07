import React, { useState, useEffect, Component } from "react";
import { withRouter } from "react-router-dom";
import "../ShowDetail(Func)/ShowDetailFunc.css";

const ShowDetailFunc = (props) => {
  const [backdrop, setBackDrop] = useState("");
  const [listPosters, setListPosters] = useState([]);

  useEffect(() => {
    setBackDrop(props.location.state.backdrop);
  }, [backdrop]);

  const onClickHandler = () => {
    const newPosterList = [...listPosters, backdrop];
    setListPosters(newPosterList);

    console.log(newPosterList);
    alert("Added to My List");
  };

  const {
    name,
    original_name,
    overview,
    original_title,
  } = props.location.state.poster;
  const backdrop_path = props.location.state.backdrop;
  const title = name || original_name || original_title;

  return (
    <div className="show-detail">
      <img className="show-detail__image" src={backdrop_path}></img>
      <h1>{title}</h1>
      <p>{overview}</p>
      <button type="button" onClick={onClickHandler} {...props}>
        + My list
      </button>
    </div>
  );
};

export default withRouter(ShowDetailFunc);
