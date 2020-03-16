import React from "react";
import "./App.css";
import Nav from "./components/navbar";
import MovieList from "./components/movielist";
import { MovieProvider } from "./components/movieContext";
import AddMovie from "./components/addMovie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
