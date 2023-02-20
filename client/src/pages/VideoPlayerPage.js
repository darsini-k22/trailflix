import React from "react";
import VideoPlayer from "../components/Movies/VideoPlayer";
import Navbar from "../components/Navbar";

export default function VideoPlayerPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <VideoPlayer />
    </div>
  );
}
