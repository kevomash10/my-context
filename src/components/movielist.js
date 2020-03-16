import React, { useContext } from "react";
import Movie from "./movie";
import { MovieContext } from "./movieContext";
import style from "./movielist.module.css";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className={style.movies}>
      {movies.map(movie => (
        <Movie
          name={movie.title}
          image={movie.image}
          price={movie.price}
          key={movie.id}
        />
      ))}
    </div>
  );
};

export default MovieList;
