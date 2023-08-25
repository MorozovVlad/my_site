import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ cars }) => {
  return (
    <Link className={styles.link} to={`/car/${cars.id - 1}`}>
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
    </Link>
  );
};

export default Card;
