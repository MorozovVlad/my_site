import React from "react";
import styles from "./CardWrapper.module.css";
import Card from "./Card";
import { cars } from "./cars.data.js";

const CardWrapper = () => {
  return (
    <div className={styles.wrapper}>
      {cars.map((cars) => (
        <Card key={cars.id} cars={cars} />
      ))}
    </div>
  );
};

export default CardWrapper;
