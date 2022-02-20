import React from "react";
import Day from "./day";

function WeekWeather(props) {
  let daysComponents = [];
  for (let dayInfo of props.listOfWeatherPerDay) {
    let dayComponent = Day(dayInfo);
    daysComponents.push(dayComponent);
  }
  return <div className="days">{daysComponents}</div>;
}
export default WeekWeather;
