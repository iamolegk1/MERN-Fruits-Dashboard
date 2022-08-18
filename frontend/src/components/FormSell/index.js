import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { sellFruit, resetErrors } from "../../Slice/FruitSlice";
import { PATHS } from "../../app/constants";
import styles from "./index.module.css";

const FormSell = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.fruit);

  const history = useNavigate();

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("image", image);

      dispatch(sellFruit(formData)).then((res) => {
        if (!res.error) {
          history(`${PATHS.fruit}/${res.payload._id}`);
        }
      });
    },
    [history, dispatch, name, description, price, image]
  );

  useEffect(() => () => dispatch(resetErrors()), [dispatch]);

  return (
    <form className={styles.form}>
      <h1 className={styles.title}> Sell Fruit </h1>
      <fieldset>
        <label>Name Fruit:</label>{" "}
        {errors && errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Description Fruit:</label>
        {errors && errors.description && (
          <span className={styles.error}>{errors.description.message}</span>
        )}
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price:</label>
        {errors && errors.price && (
          <span className={styles.error}>{errors.price.message}</span>
        )}
        <input
          type="text"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Fruit Image:</label>
        {errors && errors.image && (
          <span className={styles.error}>{errors.image.message}</span>
        )}
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </fieldset>
      <button className={styles.button} onClick={handleClick}>
        Sell Fruit
      </button>
    </form>
  );
};

export default FormSell;
