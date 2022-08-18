import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

const ButtonBack = ({ text }) => {
  const history = useNavigate();

  return (
    <button onClick={() => history("/")} className={styles.button}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      {text}
    </button>
  );
};

export default ButtonBack;
