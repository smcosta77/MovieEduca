import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const filmesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [popularFilmes, setPopularFilmes] = useState([]);

  const getPopularMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setPopularFilmes(data.results);
  };

  useEffect(() => {
    const topPopularUrl = `${filmesURL}popular?${apiKey}`;
    console.log(topPopularUrl);
    getPopularMovies(topPopularUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Filmes mais populares do momento:</h2>
      <div className="movies-container">
        {popularFilmes.length > 0 &&
          popularFilmes.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
