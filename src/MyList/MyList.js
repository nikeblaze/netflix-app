import React, { useContext } from "react";
import MyListContext from "../context/MyListContext";
import UserContext from "../context/UserContext";
import ShowDetailFunc from "../ShowDetail(Func)/ShowDetailFunc";
import { withRouter } from "react-router-dom";

const MyList = () => {
  const username = useContext(UserContext);

  return <div>Hello {username}</div>;
};

export default MyList;
