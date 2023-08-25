import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const header = () => {
  return (
    <menu>
      <div className={styles.logo}>
        <Link className={styles.link} to="/home">
          <h1>My site</h1>
        </Link>
      </div>
      <ul>
        <li>Пункт 1</li>
        <li>Пункт 2</li>
        <li>Пункт 3</li>
        <li>Пункт 4</li>
      </ul>
    </menu>
  );
};

export default header;
