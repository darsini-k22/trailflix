import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieList from "../../api/MovieList";

export default function UserReg() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [country, setCountry] = useState("");
  const [phnum, setPhnum] = useState("");
  const [subid, setSubid] = useState("");
  const navigate = useNavigate();

  const handleChange = async (e) => {
    e.preventDefault();
    try {
      const response = await MovieList.post("/register", {
        user_fname: fname,
        user_lname:lname,
        user_email: email,
        user_passwd: passwd,
        user_mobilenum: phnum,
        user_country: country,
        subid: subid,
      });
      console.log(response);
      navigate("/");
      alert("success");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
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
                Sign Up to your account
              </h2>
            </div>
            <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={handleChange}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="fname" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="fname"
                    name="fname"
                    type="text"
                    value={fname}
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                    autoComplete="fname"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="lname" className="sr-only">
                    Last Name
                  </label>
                  <input
                    id="lname"
                    name="lname"
                    type="text"
                    value={lname}
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                    autoComplete="lname"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <label htmlFor="counntry" className="sr-only">
                    Country
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    autoComplete="country"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Country"
                  />
                </div>
                <div>
                  <label htmlFor="phnum" className="sr-only">
                    Mobile Number
                  </label>
                  <input
                    id="phnum"
                    name="phnum"
                    type="number"
                    value={phnum}
                    onChange={(e) => {
                      setPhnum(e.target.value);
                    }}
                    autoComplete="phnum"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Mobile Number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={passwd}
                    onChange={(e) => {
                      setPasswd(e.target.value);
                    }}
                    autoComplete="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="justify-center items-center">
                <h1>Subscription Option</h1>
              </div>
              <div>
                <select
                  name="subid"
                  value={subid}
                  onChange={(e) => {
                    setSubid(e.target.value);
                  }}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  id="subid"
                >
                  <option
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                    value={1}
                  >
                    Gold
                  </option>
                  <option
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                    value={2}
                  >
                    Premium
                  </option>
                  <option
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                    value={3}
                  >
                    Regular
                  </option>
                </select>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
