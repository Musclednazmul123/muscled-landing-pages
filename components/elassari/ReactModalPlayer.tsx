import { PlayIcon } from "@heroicons/react/outline";
import { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import ReactPlayer from "react-player";

interface IProps {
  className?: string;
  isPlay: boolean;
  url: string;
  thumbnail?: string;
  PlayIcon?: any;
  control?: boolean;
}

const ReactModalPlayer: NextPage<IProps> = ({
  className,
  isPlay,
  url,
  thumbnail,
  PlayIcon,
  control,
}) => {
  const [play, setPlay] = useState(isPlay);
  return (
    <div
      className={` ${className}`}
      style={{
        width: 480,
        height: 280,
      }}
    >
      <div className={`relative w-[480px] h-[280px]`}>
        {thumbnail && !play ? (
          <div>
            <Image src={thumbnail} alt="video thumbnail z-50" />
            <div
              className="absolute top-0 w-full h-full flex justify-center items-center"
              onClick={() => setPlay(true)}
            >
              <Image
                src={PlayIcon}
                alt="paly icon"
                className="opacity-100 z-10 cursor-pointer"
              />
            </div>
          </div>
        ) : (
          <div className="absolute top-0 w-[480px] h-[280px]">
            <ReactPlayer
              url={url}
              playing={play}
              controls={control}
              width={480}
              height={280}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactModalPlayer;
