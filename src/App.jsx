import React from "react";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import "./styles/App.css";

function App() {
  const apiKey = "48389dae1608121c67850fc083cb62ce";
  const [topFilms, setTopFilms] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=48389dae1608121c67850fc083cb62ce&language=pt-BR&page=1`)
    .then(response => response.json())
    .then(data => setTopFilms(data.results))
  }, []);

  return (
    <div className="App">
      <Home topFilms={topFilms}/>
    </div>
  );
}

export default App;
