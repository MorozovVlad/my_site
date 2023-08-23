import "./styles/App.css";
import Header from "./components/Header";
import CardWrapper from "./components/CardWrapper";
import SimpleSlider from "./components/SimpleSlider";

function App() {
  return (
    <div className="App">
      <Header />
      <CardWrapper />
      <SimpleSlider />
    </div>
  );
}

export default App;
