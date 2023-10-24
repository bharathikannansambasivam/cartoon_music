import React from "react";
import video from "../videos/halloween.mp4";

const Header = () => {
  return (
    <div className="">
      <div className="flex h-96">
        <video autoPlay loop className="absolute h-96 object-fill w-screen">
          <source src={video} type="video/mp4" />
        </video>

        <div className="flex justify-end w-screen mr-4 mt-4 relative text-white">
          <input
            className="h-4 mt-1 mr-4 text-xs p-3 rounded text-black font-extrabold"
            type="search"
            placeholder="🔍 Music Picks"
          />
          <ul className="flex">
            <li className="px-2">Home</li>
            <li className="px-4">Playlist</li>
            <li>Favorite</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
