import { useState } from "react";
import "./App.css";

const trafficLight = [
  {
    color: "red",
    backgroundClass: "background-red",
    wait: 3000,
  },
  {
    color: "yellow",
    backgroundClass: "background-yellow",
    wait: 1000,
  },
  {
    color: "green",
    backgroundClass: "background-green",
    wait: 1000,
  },
];

function App() {
  const [activeLight, setActiveLight] = useState("red");

  return (
    <div className="App">
      <h1>Traffic Light</h1>
      <div className="trafficLightContainer">
        {trafficLight.map((light, index) => {
          return (
            <div
              key={index}
              className={`trafficLight ${
                activeLight === light.color
                  ? light.backgroundClass
                  : "background-gray"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
