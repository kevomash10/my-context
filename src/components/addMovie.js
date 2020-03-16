import React, { useState, useContext } from "react";
import { MovieContext } from "./movieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("$");
  const [movies, setMovies] = useContext(MovieContext);

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const updateName = e => {
    setName(e.target.value);
  };

  const updateMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { title: name, price: price }]);
  };
  return (
    <form onSubmit={updateMovie}>
      <input
        type="text"
        name="title"
        value={name}
        onChange={updateName}
      ></input>
      <input
        type="text"
        name="price"
        value={price}
        onChange={updatePrice}
      ></input>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
