import { useState, useMemo } from "react";

const useSort = (fruitsList) => {
  const [isDescSort, setIsDescSort] = useState(false);

  const sortedFruits = useMemo(() => {
    const newArrSortFruits = [...fruitsList];

    newArrSortFruits.sort((firstFruit, secondFruit) => {
      if (+firstFruit.price < +secondFruit.price) return isDescSort ? 1 : -1;
      if (+firstFruit.price > +secondFruit.price) return isDescSort ? -1 : 1;

      return 0;
    });

    return newArrSortFruits;
  }, [isDescSort, fruitsList]);

  return { sortedFruits, isDescSort, setIsDescSort };
};

export default useSort;
