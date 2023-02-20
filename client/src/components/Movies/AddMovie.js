import React, { useState } from "react";
import MovieList from "../../api/MovieList";

export default function AddMovie() {
  const [title, setTitle] = useState("");
  const [rdate, setRdate] = useState("");
  const [rating, setRating] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");
  const [genreid, setGenreid] = useState("");
  const [posterLink, setPosterlink] = useState("");

  {
    /*Director table*/
  }

  const handleChanges = async (e) => {
    e.preventDefault();
    try {
      const response = await MovieList.post("/add-movie-list", {
        title:title,
        date_of_release: rdate,
        movie_desc: desc,
        genreid: genreid,
        poster_link: posterLink,
        link:link,
        imdb_rating: rating,
      });

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="min-h-full py-12 px-4 sm:px-6 lg:px-8">
        <form action="#" method="POST" onSubmit={handleChanges}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-8 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Movie Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                  <label
                    htmlFor="rdate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date Of Release
                  </label>
                  <input
                    type="date"
                    name="rdate"
                    id="rdate"
                    value={rdate}
                    onChange={(e) => {
                      setRdate(e.target.value);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="link"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Movie Link
                  </label>
                  <input
                    type="text"
                    name="link"
                    id="link"
                    value={link}
                    onChange={(e) => {
                      setLink(e.target.value);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="posterLink"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Poster Link
                  </label>
                  <input
                    type="text"
                    name="posterLink"
                    id="posterLink"
                    value={posterLink}
                    onChange={(e) => {
                      setPosterlink(e.target.value);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="desc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Movie Description
                  </label>
                  <textarea
                    rows="4"
                    cols="50"
                    name="desc"
                    id="desc"
                    value={desc}
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <lable
                    htmlFor="rating"
                    className="block text-sm font-medium text-gray-700"
                  >
                    IMDB rating
                  </lable>
                  <input
                    type="number"
                    name="rating"
                    value={rating}
                    onChange={(e) => {
                      setRating(e.target.value);
                    }}
                    id="rating"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 ">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Genre ID
                  </label>
                  <input
                    type="number"
                    name="genreid"
                    id="genreid"
                    value={genreid}
                    onChange={(e) => {
                      setGenreid(e.target.value);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
