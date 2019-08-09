import React, { useState, useEffect } from "react";
import DisplayVideo from "../components/DisplayVideo";
import VideoCard from "../components/VideoCard";

const Videos = ({ results }) => {
  // results should be something like an array of objects
  const [displayedVideo, setDisplayedVideo] = useState({
    src: "https://youtu.be/ZfQR2r6rqyE",
    title: "JS Video",
    extra: "extra",
    description: "description",
    videoId: 123
  });

  useEffect(() => {
    if (results) {
      setDisplayedVideo({
        src: results[0].snippet.thumbnails.default.url,
        title: results[0].snippet.title,
        description: results[0].snippet.description,
        id: results[0].id.videoId
      });
    }
  }, [results]);

  const changeDisplayedVideo = video => {
    setDisplayedVideo({
      src: video.snippet.thumbnails.default.url,
      title: video.snippet.title,
      description: video.snippet.description,
      id: video.id.videoId
    });
  };

  return (
    <div
      style={{
        marginTop: "2%",
        display: "grid",
        gridTemplateColumns: "65% 35%",
        gridColumnGap: "3%",
        width: "100%",
        margin: "2% auto"
      }}
      className="videos-grid"
    >
      <DisplayVideo
        src={displayedVideo.src}
        title={displayedVideo.title}
        description={displayedVideo.description}
        id={displayedVideo.id}
      />
      <div
        style={{
          width: "100%"
        }}
        className="videos-list"
      >
        {results
          ? results.map(video => {
              return (
                <VideoCard
                  clicked={() => changeDisplayedVideo({ ...video })}
                  id={video.id.videoId}
                  title={video.snippet.title}
                  src={video.snippet.thumbnails.default.url}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Videos;
