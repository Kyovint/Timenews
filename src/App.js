import React, { createContext, useEffect, useState } from "react";
import { NewsContext, NewsContextProvider } from "./NewsContext";
import News from "./componentes/News";
import "./app.css";

const weatherapi ={
  key: "fb18506fbb9d71486e20b6915e7d598c",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  console.log(NewsContext.city);
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const Sch = evt => {
    if(evt.key === "Enter"){
      fetch(`${weatherapi.base}weather?q=${query}&units=metric&APPID=${weatherapi.key}`)
      .then(ans => ans.json()).then(answer => {
        setWeather(answer);
        NewsContext.city={query};
        setQuery('');

      });
    }
  }

  const dateBuilder = (datte) => {
    let months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Nomviembre","Diciembre"];
    let days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

    let day = days[datte.getDay()];
    let date = datte.getDate();
    let month = months[datte.getMonth()];
    let year = datte.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  
  return (
    <div>

      <header>
        <h1 className="text-center">Time and News Page</h1>
      </header>
      <main>
        <div>
          <input type="text" placeholder="Busca tu ciudad" onChange={e => {setQuery(e.target.value)}} value={query} onKeyPress={Sch}/>
        </div>

        {(typeof weather.main != "undefined") ? (
          <div>
            <div>
              <h1 className="text-center">Tiempo y clima </h1>
            </div>

            <div className="city"> {weather.name}</div>
            <div className="date">{dateBuilder(new Date())} </div>
            <div className="temp">{Math.round(weather.main.temp)}°c</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        ) : ('')}

        <div>
          <h1 className="text-center" >Noticias</h1>
        </div>

        <div>
          <NewsContextProvider>
            <News />
          </NewsContextProvider>
        </div>
      </main>

    </div>
    
  );
}

export default App;