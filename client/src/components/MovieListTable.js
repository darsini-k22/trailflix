import React, { useContext, useEffect, useState } from "react";
import MovieList from "../api/MovieList";
import { MovieContext } from "../context/MovieContext";

export default function MovieListTable(props) {
  const { movies, setMovies } = useContext(MovieContext);
  const [genre, setGenre] = useState("");
  const [genreName, setGenreName] = useState([]);
  let i = 0;
  let gen = [];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await MovieList.get("/get-movie-list");
        setMovies(list.data.data.info);
        const genre = await MovieList.get("/get-genre");
        setGenre(genre.data);

        const gen = await MovieList("/get-genre-list");
        setGenreName(gen.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold mb-5">Genre</h2>

          <div className="grid grid-cols-6 gap-6 mb-11">
            {genre &&
              genre.map((genre, index) => {
                return (
                  <a
                    key={index}
                    // href={"http://localhost:3000/video/".concat(genreName?.videoid)}
                    class="col-span-6 sm:col-span-2 p-6 max-w-sm bg-white rounded-lg border justify-center items-center border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                      {genre?.genre_name}
                    </h5>
                  </a>
                );
              })}
          </div>

          <h2 className="text-3xl font-bold mb-5 mt-10">Movies</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {movies &&
              movies.map((movies) => {
                return (
                  <a
                    key={movies.videoid}
                    href={"http://localhost:3000/video/".concat(movies.videoid)}
                    className="group"
                  >
                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={movies.poster_link}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-lg text-gray-700 font-normal">
                      {movies.title}
                    </h3>
                    <p className="mt-1 text-4xl font-medium text-yellow-400">
                      {"*".repeat(movies.imdb_rating)}
                    </p>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
//http://localhost:3000/list
