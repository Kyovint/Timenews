/*import React, {useState} from 'react';
import Sbar from './Sbar';

export function Weather(){

    const [weather, setWeather] = useState({});

    const api = {
        key: "7d4ef5d23648c7c62acd3ccfa1a0a30b",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    return(
        <main>
            {(typeof weather.main != "undefined") ? (
            <div>
              <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(weather.main.temp)}°c
                </div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
            ) : ('')}
        </main>
    );
        
    
}

export default Weather;*/
