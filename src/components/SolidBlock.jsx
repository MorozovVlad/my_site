import React from "react";
import styles from "./SolidBlock.module.css";
import { cars } from "./cars.data.js";

const SolidBlock = () => {
  return (
    <div className={styles.SolidBlock}>
      <div
        className={styles.MainBlock}
        style={{
          backgroundImage: `url(${cars[4].img})`,
        }}
      />
      <div className={styles.Description}>
        <p>{cars[1].name}</p>
        <hr></hr>
        <p>{cars[1].description}</p>
      </div>
    </div>
  );
};

export default SolidBlock;
