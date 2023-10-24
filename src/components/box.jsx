import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faHeart,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

const DivSections = (props) => {
  const { sectionData } = props;
  const { songName, songDuration, image, music, songType } = sectionData;

  const audio = new Audio(music);

  const playAudio = () => {
    audio.play();
  };

  const pauseAudio = () => {
    audio.pause();
  };

  return (
    <div className=" flex ">
      <div className=" grid  text-black bg-slate-300 m-2   p-4 items-center hover:bg-slate-300 text-center     ">
        <div>
          <img className="h-32 rounded w-48" src={image} alt="" />
        </div>
        <div className="">
          <h1 className="mt-1">{songName}</h1>
          <p className="text-xs lowercase">
            {songName}
            {songType}{" "}
          </p>
          <p className="text-xs p-2 flex justify-around  items-center gap-1   ">
            {songDuration}
            <FontAwesomeIcon
              className="  flex  p-1 border border-1 border-gray-500 rounded-xl hover:bg-pink-300"
              icon={faHeart}
              style={{ color: "red" }}
            />
            <FontAwesomeIcon icon={faDownload} />
          </p>
          <div className=" flex  flex-col gap-2  mt-2 ">
            <button
              className="bg-gray-400   rounded-xl hover:bg-gray-500 "
              onClick={playAudio}
            >
              <FontAwesomeIcon className="mr-2" icon={faPlay} />
              Play
            </button>

            <button
              className="bg-gray-400  rounded-xl hover:bg-gray-500"
              onClick={pauseAudio}
            >
              <FontAwesomeIcon className=" mr-1" icon={faPause} />
              Pause
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivSections;
