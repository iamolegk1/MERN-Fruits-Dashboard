import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../app/paths";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./index.module.css";

const FruitItem = ({ data }) => {
  const { name, description, price, image, _id } = data;

  return (
    <Link to={`${paths.fruit}/${_id}`} className={styles.card}>
      {image && (
        <LazyLoadImage
          effect="blur"
          width="268px"
          height="268px"
          src={image}
          alt={name}
          className={styles.image}
        ></LazyLoadImage>
      )}
      <div className={styles.container}>
        <h4 className={styles.title}>{name}</h4>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price}$</p>
      </div>
    </Link>
  );
};

export default FruitItem;
