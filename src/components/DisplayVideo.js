import React from "react";

const DisplayVideo = props => {
  return (
    <div
      style={{ marginRight: "2%", width: "100%", height: "auto" }}
      class="ui card"
    >
      <div class="image">
        <img src={props.src} alt="blarg" />
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
