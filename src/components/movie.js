import React from "react";
import style from "./movie.module.css";


const Movie = ({ name, price, id, image }) => {
  return (
    <div className={style.movies}>
      <h2>{name}</h2>
      <h2>{price}</h2>
      <h2>{id}</h2>
      <img src={image} alt=""></img>
    </div>
  );
};

export default Movie;
