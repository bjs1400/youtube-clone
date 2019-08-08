import React from "react";

const VideoCard = ({ src, title }) => {
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={src} alt="Video" />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default VideoCard;
