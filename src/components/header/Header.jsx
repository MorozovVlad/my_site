import { React, useMemo } from "react";
import { Link } from "react-router-dom";
import { cars } from "../cars.data";
import styles from "./Header.module.css";

const Header = ({ filterCars }) => {
  console.log({ filterCars });
  return (
    <menu>
      <div className={styles.logo}>
        <Link className={styles.link} to="/home">
          <h1
            onClick={() => {
              filterCars(0);
            }}
          >
            BMW
          </h1>
        </Link>
      </div>
      <ul>
        <Link className={styles.link} to="/home">
          <li
            onClick={() => {
              filterCars(3);
            }}
          >
            3 серия
          </li>
        </Link>
        <Link className={styles.link} to="/home">
          <li
            onClick={() => {
              filterCars(5);
            }}
          >
            5 серия
          </li>
        </Link>
        <Link className={styles.link} to="/home">
          <li
            onClick={() => {
              filterCars(7);
            }}
          >
            7 серия
          </li>
        </Link>
      </ul>
    </menu>
  );
};

export default Header;
