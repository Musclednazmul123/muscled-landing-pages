import React from "react";
import ReactPlayer from "react-player";

interface Props {
  className?: string;
  url: string;
  Icon: any;
  thumbnail?: string;
  width?: string;
  height?: string;
}

const ReactPlayerModal: React.FC<Props> = ({
  url,
  Icon,
  thumbnail,
  width,
  height,
  className,
}) => {
  const [isplaying, setIsPlaying] = React.useState<boolean>(false);
  const [hover, setHover] = React.useState<boolean>(false);
  return (
    <>
      <div
        style={{
          backgroundImage: thumbnail && `url('./${thumbnail}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: width && width,
          height: height && height,
        }}
        className={`bg-gray-300 rounded-lg lg:mt-0 mt-12 lg:w-[640px] md:h-[360px] overflow-hidden h-[250px] flex items-center justify-center ${className}`}
      >
        <div onClick={() => setIsPlaying(true)}>
          <Icon />
        </div>
      </div>
      {isplaying && (
        <div
          onClick={() => {
            setIsPlaying(false);
          }}
          className="fixed top-0 flex items-center justify-center w-full h-full px-6 bg-black cursor-pointer bg-opacity-90"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative overflow-visible  pr-7"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover && (
              <svg
                tabIndex={1}
                onClick={() => setIsPlaying(false)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="absolute right-0 w-5 h-5 text-white border-white cursor-pointer  focus:border -top-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            <ReactPlayer url={url} playing={true} controls={hover} />
          </div>
        </div>
      )}
    </>
  );
};

export default ReactPlayerModal;
