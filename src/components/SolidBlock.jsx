import React from "react";
import styles from "./SolidBlock.module.css";
import { cars } from "./cars.data.js";
import { Link } from "react-router-dom";

const SolidBlock = () => {
  return (
    <Link to={"/car/4"} className={styles.SolidBlock}>
      <div
        className={styles.MainBlock}
        style={{
          backgroundImage: `url(${cars[4].img})`,
        }}
      />
      <div className={styles.Description}>
        <p>{cars[4].name}</p>
        <hr></hr>
        <p>{cars[4].description}</p>
      </div>
    </Link>
  );
};

export default SolidBlock;
