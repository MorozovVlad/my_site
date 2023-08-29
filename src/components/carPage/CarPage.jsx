import { React } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { cars } from "../cars.data.js";
import styles from "./CarPage.module.css";
import { useState } from "react";

const CarPage = () => {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const filterCarsIndex = (index) => {
    setIndex(index);
  };
  return (
    <div>
      <Header filterCars={filterCarsIndex} />
      <div className={styles.content}>
        <div
          className={styles.MainBlock}
          style={{
            backgroundImage: `url(../${cars[id].img})`,
          }}
        />
        <div className={styles.Description}>
          <p>{cars[id].name}</p>
          <hr></hr>
          <p>{cars[id].description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarPage;
