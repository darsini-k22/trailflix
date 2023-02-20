import React, { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import MovieList from "../../api/MovieList";
import { UserContext } from "../../context/UserContext";

export default function UserLogin() {
  const [email, setEmail] = useState();
  const [passwd, setPasswd] = useState();
  const { users, setUsers } = useContext(UserContext);
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);

  const fetchData = async (e) => {
    try {
      const list = await MovieList.get(`login/${email}`);
      setUsers(list.data);
      console.log(list.data.user_email);
      if (isError) {
        navigate("/");
        alert("Success!");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="flex w-full min-h-screen justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/undefined/external-movie-movie-theater-flaticons-lineal-color-flat-icons-7.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="passwd" className="sr-only">
                  Password
                </label>
                <input
                  id="passwd"
                  name="passwd"
                  type="password"
                  value={passwd}
                  onChange={(e) => {
                    setPasswd(e.target.value);
                  }}
                  autoComplete="passwd"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  fetchData();
                  setIsError(false);
                  if (users.user_passwd !== passwd) setIsError(true);
                  else {
                    // redirect when correct
                  }
                }}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
              <div className="mt-10"></div>
              {isError && (
                <div
                  class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                  role="alert"
                >
                  <p class="font-bold">Password</p>
                  <p>Incorrect Password! Try again!</p>
                </div>
              )}
              {/* {(
                <div
                  class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
                  role="alert"
                >
                  <p class="font-bold">You have logged in</p>
                </div>
              )} */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
