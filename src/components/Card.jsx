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
      <div className="info">
        <h1 className={styles.h1}>{cars.name}</h1>
        <p className={styles.p}>{cars.description}</p>
      </div>
    </div>
  );
};

export default Card;
