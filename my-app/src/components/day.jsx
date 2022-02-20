import React, { Fragment } from "react";
import convertDate from "./convert-date";

const windFieldDescription = "Ветер, м/сек.: ";
const humidityFieldDescription = "Влажность, %: ";
const atmPressureFieldDescription = "Давление, мм: ";
const minTemp = "мин.";
const maxTemp = "макс.";
const temprSymbol = "°";

function Day(props) {
  return (
    <Fragment key={props.id}>
      <div className="day">
        <p>{convertDate(props.date)}</p>
        <img src={props.img_url} alt={props.description}></img>
        <div className="temperature">
          <div>
            <p>{minTemp}</p>
            <p>
              {props.temperatureMin}
              {temprSymbol}
            </p>
          </div>
          <div>
            <p>{maxTemp}</p>
            <p>
              {props.temperatureMax}
              {temprSymbol}
            </p>
          </div>
        </div>
        <p>
          {atmPressureFieldDescription}
          <span>{props.atmPressure}</span>
        </p>
        <p>
          {humidityFieldDescription}
          <span>{props.humidity}</span>
        </p>
        <p>
          {windFieldDescription}
          <span>{props.wind}</span>
        </p>
      </div>
    </Fragment>
  );
}

export default Day;
