import React from "react";
import styles from "./Header.module.css";

const header = () => {
  return (
    <menu>
      <div class={styles.logo}>
        <h1>My site</h1>
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
