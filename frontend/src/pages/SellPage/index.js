import React from "react";

import ButtonBack from "../../components/ButtonBack";
import FormSell from "../../components/FormSell";

import styles from "./index.module.css";

const SellPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <ButtonBack text="back to main page" />
        <FormSell />
      </div>
    </>
  );
};

export default SellPage;
