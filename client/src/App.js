import React from "react";
import AddMoviePage from "./pages/AddMoviePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieListPage } from "./pages/MovieListPage";
import { UpdateMovieDetails } from "./pages/UpdateMovieDetails";
import MovieContextProvider from "./context/MovieContext";
import SignUpPage from "./pages/SignUpPage";
import UserLoginPage from "./pages/UserLoginPage";
import UserContextProvider from "./context/UserContext";
import UserRegPage from "./pages/UserRegPage";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import WishListPage from "./pages/WishListPage";

function App() {
  return (
    <MovieContextProvider>
      <UserContextProvider>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/mov" element={<AddMoviePage />} />
              <Route exact path="/" element={<MovieListPage />} />
              <Route exact path="/update" element={<UpdateMovieDetails />} />
              <Route exact path="/login" element={<UserLoginPage />} />
              <Route exact path="/reg" element={<UserRegPage />} />
              <Route exact path="/video/:id" element={<VideoPlayerPage />} />
              <Route exact path="/wishlist" element={<WishListPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </UserContextProvider>
    </MovieContextProvider>
  );
}

export default App;
