import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NewsContextProvider } from "./NewsContext";
import News from "./componentes/News";
import "./app.css";
import { Sbar } from "./componentes/Sbar";

function App() {
  return (
    <div>

      <div>
      <header>
        <h1 className="text-center">Time and News Page</h1>
      </header>
      </div>

      <div>
        <NewsContextProvider>
        <main>
          <div>
            <Sbar />
          </div>
          <div>
            <h1 className="text-center">Tiempo y clima </h1>
          </div>
          <div>

          </div>
          <div>
            <h1 className="text-center" >Noticias</h1>
          </div>
          <div>
            <News />
          </div>
        </main>
        </NewsContextProvider>
      </div>
      
    </div>
    
  );
}

export default App;