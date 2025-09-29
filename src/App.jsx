import React, { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "c07326938376cf2405e0fefc1230c6fb";
  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  };

  return (
    <div style={{padding: "20px", textAlign: "center"}}>
      <h1>Consulta el Clima</h1>

      <input
        type="text"
        placeholder="Ingresa una ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button style={{marginLeft:"20px"}} onClick={getWeather}>Buscar</button>

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2 style={{color: "#0c8d9eff"}} >{weather.name}</h2>
          <p>🌡️ Temperatura: {weather.main.temp} °C</p>
          <p>☁️ Nubosidad: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;