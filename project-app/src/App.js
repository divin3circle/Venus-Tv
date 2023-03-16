import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//fa87098a

const API_URL = "http://www.omdbapi.com?apikey=fa87098a";

const movie1 = {
  Title: "Avengers: Infinity War",
  Year: "2018",
  imdbID: "tt4154756",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>Venus TV</h1>

      <div className="search">
        <input
          placeholder="Looking for something?"
          value="Avengers"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="Search" onClick={() => {}} />
      </div>
      <div className="container">
        <MovieCard movie1={movies[0]} />
      </div>
    </div>
  );
};
export default App;
