import React from "react";
import { useState } from "react";
import styles from "./CreateCar.module.css";

const clearData = {
  name: "",
  description: "",
  img: "",
};

const CreateCar = ({ setCars }) => {
  const [data, setData] = useState(clearData);

  const createCar = (e) => {
    e.preventDefault();
    setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);

    setData(clearData);
  };

  return (
    <form className={styles.form}>
      <input
        placeholder="name"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            name: e.target.value,
          }))
        }
        value={data.name}
      />
      <textarea
        placeholder="description"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            description: e.target.value,
          }))
        }
        value={data.description}
      />
      <input
        placeholder="img"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            img: e.target.value,
          }))
        }
        value={data.img}
      />
      <button onClick={(e) => createCar(e)}>Добавить</button>
    </form>
  );
};

export default CreateCar;
