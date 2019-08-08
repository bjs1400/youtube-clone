import React from "react";

const DisplayVideo = props => {
  return (
    <div style={{ float: "left", marginRight: "2%" }} class="ui card">
      <div class="image">
        <video
          src={`https://www.youtube.com/watch?v=${props.id}`}
          alt="video"
        />
      </div>
      <div class="content">
        <div class="header">{props.title}}</div>
        <div class="meta">
          <span class="date">{props.extra}</span>
        </div>
        <div class="description">{props.description}</div>
      </div>
    </div>
  );
};

export default DisplayVideo;
