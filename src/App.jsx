import React, { useState } from "react";
import CitySearch from "./components/citySearch";
import AnswerWeather from "./components/answerWeather";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "c07326938376cf2405e0fefc1230c6fb";
  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
    )
      .then((res) => res.json())
      .then((data) => { setWeather(data); });
  };

  return (
    <div style={{padding: "20px", textAlign: "center"}}>
      <h1>Consulta el Clima</h1>

      <CitySearch city={city} setCity={setCity} getWeather={getWeather}></CitySearch>
      {weather && <AnswerWeather weather={weather}></AnswerWeather> }

    </div>
  );
}

export default WeatherApp;