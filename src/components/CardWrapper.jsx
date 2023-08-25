import React from "react";
import styles from "./CardWrapper.module.css";
import Card from "./Card";
import { cars as carsData } from "./cars.data.js";
import CreateCar from "./CreateCar";
import { useState } from "react";

const CardWrapper = () => {
  const [cars, setCars] = useState(carsData);
  return (
    <div className={styles.wrapper}>
      {cars.map((cars) => (
        <Card key={cars.id} cars={cars} />
      ))}
      <CreateCar setCars={setCars} />
    </div>
  );
};

export default CardWrapper;
