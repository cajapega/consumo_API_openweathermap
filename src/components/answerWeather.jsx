import React from "react"

function AnswerWeather ({weather}) {
    return (
        <div>
            <h2 style={{color: "#0c8d9eff"}} >{weather.name}</h2>
            <p>🌡️ Temperatura: {weather.main.temp} °C</p>
            <p>☁️ Nubosidad: {weather.weather[0].description}</p>
        </div>
    )
}
export default AnswerWeather;

/*{weather && (
    <div style={{ marginTop: "20px" }}>
        <h2 style={{color: "#0c8d9eff"}} >{weather.name}</h2>
        <p>🌡️ Temperatura: {weather.main.temp} °C</p>
        <p>☁️ Nubosidad: {weather.weather[0].description}</p>
        </div>

              <AnswerWeather weather={weather}></AnswerWeather>
  )}*/