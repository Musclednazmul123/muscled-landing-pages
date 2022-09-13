import React, { FC } from "react";
import ReactPlayerModal from './ReactPlayerModal'
import playIconImage from '../../assets/play.png'
import { VideoFrameProps } from "../../Milos/component.type"

const VideoFrame: FC<VideoFrameProps> = ({ className, allowFullScreen, sourceURL, ...props }) => {
  const playIcon = () => {
    return (
      <img src={playIconImage.src} alt="" style={{ cursor: 'pointer' }} />
    )
  }
  return (
    <ReactPlayerModal
      url={sourceURL ? sourceURL : 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'}
      Icon={playIcon}
      width='100%'
      height='100%'
      className="left-0"
    />
  );
};

export default VideoFrame;
