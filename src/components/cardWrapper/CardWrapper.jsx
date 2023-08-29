import { React, useMemo } from "react";
import styles from "./CardWrapper.module.css";
import Card from "../card/Card";
import { cars as carsData } from "../cars.data.js";
import CreateCar from "../createCar/CreateCar";
import { useState } from "react";

const CardWrapper = (index) => {
  const [cars, setCars] = useState(carsData);

  let filteredCars = useMemo(
    () => cars.filter((cars) => cars.series === Number(index.index)),
    [index.index]
  );
  if (index.index == 0) {
    filteredCars = cars;
  }
  return (
    <div className={styles.wrapper}>
      {filteredCars.map((cars) => (
        <Card key={cars.id} cars={cars} />
      ))}
      <CreateCar setCars={setCars} />
    </div>
  );
};

export default CardWrapper;
