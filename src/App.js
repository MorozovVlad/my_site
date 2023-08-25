import "./styles/App.css";
import Header from "./components//header/Header";
import CardWrapper from "./components/cardWrapper/CardWrapper";
import SimpleSlider from "./components/simpleSlider/SimpleSlider";
import SolidBlock from "./components/solidBlock/SolidBlock";

function App() {
  return (
    <div className="App">
      <Header />
      <SolidBlock />
      <CardWrapper />

      <SimpleSlider />
    </div>
  );
}

export default App;
