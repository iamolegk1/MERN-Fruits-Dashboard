import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFruits } from "../../Slice/FruitsSlice";
import Spinner from "../Spinner";

const FruitsList = () => {
  const dispatch = useDispatch();
  const { fruitsList, loading } = useSelector((state) => state.fruits);

  useEffect(() => {
    dispatch(getFruits());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return <div>{fruitsList && fruitsList.map((fruit) => fruit.name)}</div>;
};

export default FruitsList;
