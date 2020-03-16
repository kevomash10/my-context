import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      title: "Harry Porter",
      id: 1,
      price: "$100",
      image: "./img/product-1.jpeg"
    },
    {
      title: "The Incredibles",
      id: 2,
      price: "$100",
      image: "./img/product-2.jpeg"
    },
    {
      title: "Game of Thrones",
      id: 3,
      price: "$100",
      image: "./img/product-3.jpeg"
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
