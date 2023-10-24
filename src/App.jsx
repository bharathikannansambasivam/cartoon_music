import React from "react";
import Header from "./components/header";

import image1 from "./images/shinchan1.png";
import image2 from "./images/ben10.jpeg";
import image3 from "./images/bheem.jpeg";
import image4 from "./images/doraemon.png";
import image5 from "./images/mrbean.jpeg";
import image6 from "./images/oogy.jpeg";
import image7 from "./images/tom.jpeg";
import image8 from "./images/dora.jpeg";
import image9 from "./images/jakie.jpeg";

import bheemAudio from "./songs/bheem.mp3";
import shinchanAudio from "./songs/shinchanTamil.mp3";
import ben10Audio from "./songs/ben10.mp3";
import doraemonAudio from "./songs/doraemon.mp3";
import mrbeanAudio from "./songs/mrbean.mp3";
import oggyAudio from "./songs/oggy.mp3";
import tomAudio from "./songs/tom.mp3";
import doraAudio from "./songs/dora.mp3";
import jakieAudio from "./songs/jakie.mp3";

import DivSections from "./components/box"; // Assuming the component file is in the same directory
const App = () => {
  const song1 = {
    songName: "SHINCHAN",
    songType: " Intro Song",
    songDuration: "30sec",
    image: image1,
    music: shinchanAudio,
  };
  const song2 = {
    songName: "BEN10",
    songType: " Intro Song",

    songDuration: "42sec",

    image: image2,
    music: ben10Audio,
  };
  const song3 = {
    songName: "BHEEM",
    songType: " Intro Song",

    songDuration: "35sec",

    image: image3,
    music: bheemAudio,
  };
  const song4 = {
    songName: "DORAEMON",
    songType: " Intro Song",

    songDuration: "34sec",

    image: image4,
    music: doraemonAudio,
  };

  const song5 = {
    songName: "MR.Bean",
    songType: " Intro Song",

    songDuration: "29sec",

    image: image5,
    music: mrbeanAudio,
  };

  const song6 = {
    songName: "OOGY",
    songType: " Intro Song",

    songDuration: "40sec",

    image: image6,
    music: oggyAudio,
  };

  const song7 = {
    songName: "TOM & JERRY",
    songType: " Intro Song",

    songDuration: "24sec",

    image: image7,
    music: tomAudio,
  };
  const song8 = {
    songName: "DORA",
    songType: " Intro Song",

    songDuration: "27sec",

    image: image8,
    music: doraAudio,
  };
  const song9 = {
    songName: "JAKIECHAN",
    songType: " Intro Song",

    songDuration: "27sec",

    image: image9,
    music: jakieAudio,
  };

  return (
    <div className="">
      <Header />

      <div className="flex grid grid-cols-2 flex-wrap sm:grid sm:grid-cols-4 lg:grid-cols-6 sm:">
        <DivSections sectionData={song1} />
        <DivSections sectionData={song2} />
        <DivSections sectionData={song3} />
        <DivSections sectionData={song4} />
        <DivSections sectionData={song5} />
        <DivSections sectionData={song6} />
        <DivSections sectionData={song7} />
        <DivSections sectionData={song8} />
        <DivSections sectionData={song9} />
      </div>
    </div>
  );
};

export default App;
