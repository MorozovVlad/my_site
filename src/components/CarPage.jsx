import { React, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import { cars } from "./cars.data.js";
import styles from "./CarPage.module.css";

const CarPage = () => {
  //   const [cars, setCars] = useState({});
  const { id } = useParams();
  return (
    <div>
      <Header />
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
