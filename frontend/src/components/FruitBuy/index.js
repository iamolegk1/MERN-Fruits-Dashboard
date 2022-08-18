import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { getFruit } from "../../Slice/FruitSlice";
import Spinner from "../Spinner";
import ButtonBack from "../ButtonBack";
import styles from "./index.module.css";

const FruitBuy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
          <ButtonBack text="back to all fruits" />
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
                <button
                  onClick={() => navigate("/order")}
                  className={styles.button}
                  type="button"
                >
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
