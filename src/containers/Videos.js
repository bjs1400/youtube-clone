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
  // const playHandler = video => {
  //   setDisplayedVideo({ ...video });
  // };

  return (
    <div style={{ marginTop: "2%" }} className="videos-grid">
      <DisplayVideo
        src={displayedVideo.src}
        title={displayedVideo.title}
        description={displayedVideo.description}
        id={displayedVideo.id}
      />
      <div style={{ float: "left" }} className="videos-list">
        {results
          ? results.map(video => {
              return (
                <VideoCard
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
