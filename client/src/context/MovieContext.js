import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export default function MovieContextProvider(props){
  const [movies, setMovies] = useState([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {props.children}
    </MovieContext.Provider>
  );
};

