import "./App.css";

import WEATHER_FOR_WEEK from "./config";
import WeekWeather from "./components/week";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      {Header()}
      {WeekWeather({ listOfWeatherPerDay: WEATHER_FOR_WEEK })}
    </div>
  );
}

export default App;
