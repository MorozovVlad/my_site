import "./styles/App.css";
import Header from "./components//header/Header";
import CardWrapper from "./components/cardWrapper/CardWrapper";
import SimpleSlider from "./components/simpleSlider/SimpleSlider";
import SolidBlock from "./components/solidBlock/SolidBlock";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);

  const filterCarsIndex = (index) => {
    setIndex(index);
  };

  return (
    <div className="App">
      <Header filterCars={filterCarsIndex} />
      <SolidBlock />
      <CardWrapper index={index} />
      <SimpleSlider />
    </div>
  );
}

export default App;
