import "./styles/App.css";
import Header from "./components/Header";
import CardWrapper from "./components/CardWrapper";
import SimpleSlider from "./components/SimpleSlider";
import SolidBlock from "./components/SolidBlock";

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
