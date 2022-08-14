import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getFruit } from "../../Slice/FruitSlice";
import Spinner from "../Spinner";
import styles from "./index.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const FruitBuy = () => {
  const history = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { fruit, loading } = useSelector((state) => state.fruit);

  useEffect(() => {
    dispatch(getFruit(id));
  }, [dispatch, id]);

  if (loading) return <Spinner />;
  return (
    fruit && (
      <>
        <div className={styles.container}>
          <button onClick={() => history("/")} className={styles.back}>
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
            back to all fruits
          </button>
          <div className={styles.wrapper}>
            <div className={styles.product_image}>
              <LazyLoadImage
                className={styles.image}
                effect="blur"
                width="400px"
                height="400px"
                src={fruit.image}
                alt={fruit.name}
              ></LazyLoadImage>
            </div>
            <div className={styles.product_info}>
              <div className={styles.product_text}>
                <h1>{fruit.name}</h1>
                <h2>{fruit.description}</h2>
              </div>
              <div className={styles.product_price_btn}>
                <p>
                  <span className={styles.price}>{fruit.price}$</span>
                </p>
                <button className={styles.button} type="button">
                  buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default FruitBuy;
