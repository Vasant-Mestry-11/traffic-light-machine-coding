import { useEffect, useState } from "react";
import "./App.css";
import TrafficLight from "./components/TrafficLight";

const trafficLight = [
  {
    color: "red",
    backgroundClass: "background-red",
    wait: 4000,
  },
  {
    color: "yellow",
    backgroundClass: "background-yellow",
    wait: 2000,
  },
  {
    color: "green",
    backgroundClass: "background-green",
    wait: 3000,
  },
];

function App() {
  const [activeLight, setActiveLight] = useState("red");
  const currentLight = trafficLight.find(
    (light) => light.color === activeLight
  );
  const currentLightIndex = trafficLight.findIndex(
    (light) => light.color === activeLight
  );

  useEffect(() => {
    const idx = (currentLightIndex + 1) % trafficLight.length;
    const timer = setTimeout(() => {
      setActiveLight(trafficLight[idx].color);
    }, currentLight?.wait);

    return () => clearTimeout(timer);
  }, [activeLight, currentLightIndex, currentLight]);

  return (
    <div className="App">
      <h1>Traffic Light</h1>
      <div className="trafficLightContainer">
        {trafficLight.map((light, index) => {
          return (
            <TrafficLight
              isActive={light.color === activeLight}
              key={index}
              bgClass={currentLight?.backgroundClass}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
