import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFruits } from "../../Slice/FruitsSlice";
import useSort from "../../hooks/useSort";
import FruitItem from "../FruitItem";
import Spinner from "../Spinner";

import styles from "./index.module.css";

const FruitsList = () => {
  const dispatch = useDispatch();
  const { fruitsList, loading } = useSelector((state) => state.fruits);
  const { sortedFruits, isDescSort, setIsDescSort } = useSort(fruitsList || []);

  useEffect(() => {
    dispatch(getFruits());
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className={styles.container}>
        <div className={styles.sortWrapper}>
          <button
            onClick={() => setIsDescSort(!isDescSort)}
            className={styles.buttonSort}
          >
            {`${isDescSort ? "lowest first" : "highest first"}`}
          </button>
        </div>
        {sortedFruits &&
          sortedFruits.map((data) => <FruitItem key={data._id} data={data} />)}
      </div>
    </>
  );
};

export default FruitsList;
