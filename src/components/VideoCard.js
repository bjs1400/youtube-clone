import React from "react";

const VideoCard = ({ src, title }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "2%",
        boxShadow: "4px 6px 20px 2px rgba(0, 0, 0, 0.75)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        textAlign: "center",
        alignItems: "center",
        marginBottom: "3%"
      }}
    >
      <div className="card-img">
        <img
          style={{
            width: "100%",
            height: "auto"
          }}
          src={src}
          alt="Video"
        />
      </div>
      <h3
        style={{
          padding: "5%"
        }}
      >
        {title}
      </h3>
    </div>
  );
};

export default VideoCard;
