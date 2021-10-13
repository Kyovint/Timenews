import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();
//export const city = 'bogota';

export const NewsContextProvider = (props) => {
  const [data, setData] = useState('');
  const [city, setCity] = useState('');

  const apiKey = "80ccb827a4764273ac6f45c82944adde";
  

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${city}&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [city]);

  /*const getdata = async () =>{
    const datta = await fetch (`https://newsapi.org/v2/everything?q=${city}&apiKey=${apiKey}`)   ;
    const daata = await datta.json();
    setData(daata);
  }*/

  return (
    
    <NewsContext.Provider value={{ data }}>
      <input type="text" placeholder="Busca tu ciudad" value={city} onChange={e => setCity(e.target.value)} />
      {props.children}
    </NewsContext.Provider>
  );
};
