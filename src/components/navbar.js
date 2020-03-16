import React, { useContext } from "react";
import style from "./navbar.module.css";
import { MovieContext } from "./movieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className={style.navbar}>
      <h3>Kelvin</h3>
      <p>No of movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
