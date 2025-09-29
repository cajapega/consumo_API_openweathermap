//Permite crear componentes
import React from "react"

function CitySearch ({city, setCity, getWeather}) {
    return (
        <div>
            <input
            type="text"
            placeholder="Ingresa la ciudad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <button 
            style={{marginLeft:"20px"}} 
            onClick={getWeather}
            >Buscar</button>
        </div>
    )
}
export default CitySearch;