import React from "react";
import styles from "./index.module.css";

const FormOrder = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form className={styles.form}>
          <h2 className={styles.fa_shipping_fast}> Shipping Details</h2>
          <div className={styles.name}>
            <div>
              <label htmlFor={styles.f_name}>First</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="l-name">Last</label>
              <input type="text" />
            </div>
          </div>
          <label htmlFor="name">Street</label>
          <input type="text" />
          <div className={styles.address_info}>
            <div>
              <label htmlFor="city">City</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="zip">Zip</label>
              <input type="text" />
            </div>
          </div>
          <h2>Payment Information</h2>
          <div>
            <label htmlFor="card-num">Credit Card No.</label>
            <input type="text" />
          </div>
          <div className={styles.cc_info}>
            <div>
              <label htmlFor="card-num">Exp</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="card-num">CCV</label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.btns}>
            <button onClick={() => null}>Purchase</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOrder;
