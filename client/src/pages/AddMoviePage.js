import React from "react";
import AddMovie from "../components/Movies/AddMovie";
import Navbar from "../components/Navbar";

export default function () {
  return (
    <>
      <div>
        <Navbar />

        <div className="flex w-full min-h-screen justify-center items-center">
          <AddMovie />
        </div>
      </div>
    </>
  );
}
