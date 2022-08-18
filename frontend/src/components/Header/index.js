import React from "react";
import { Link } from "react-router-dom";

import { PATHS } from "../../app/constants";
import styles from "./index.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.banner}>
        <div className={styles.banner__overlay}>
          <div className={styles.banner__container}>
            <h1 className={styles.banner__hero}>FRUIT SHOP</h1>
            <p className={styles.banner__text}>
              taste, benefits and uniqueness of bright fruits!
            </p>
          </div>
        </div>
        <nav>
          <ul className={styles.nav} role="navigation">
            <li>
              <Link className={styles.sell} to={PATHS.sell}>
                sell fruit
              </Link>
            </li>
            <li>
              <p>delivery</p>
            </li>
            <li>
              <p>products</p>
            </li>
            <li>
              <p>contact</p>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
