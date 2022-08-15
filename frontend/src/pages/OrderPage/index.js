import React from "react";
import ButtonBack from "../../components/ButtonBack";
import FormOrder from "../../components/FormOrder";
import styles from "./index.module.css";

const OrderPage = () => {
  return (
    <div className={styles.wrapper}>
      <ButtonBack text="back to main page" />
      <FormOrder />
    </div>
  );
};

export default OrderPage;
