import React from "react";
import styles from "./Card.module.css";

const Card = ({ cars }) => {
  return (
    <div className={styles.card} key={cars.id}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${cars.img})`,
        }}
      />
      <h1 className={styles.h1}>{cars.name}</h1>
      <p className={styles.p}>{cars.id}</p>
    </div>
  );
};

export default Card;
