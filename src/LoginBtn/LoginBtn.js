import React from "react";
import styles from "./LoginBtn.module.css";

const loginBtn = (props) => {
  return (
    <button className={`${styles.btn}`} onClick={props.login}>
      Login
    </button>
  );
};

export default loginBtn;
