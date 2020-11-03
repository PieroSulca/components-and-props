import React from "react";
import VideoThumbnail from "./video-thumbnail";

export function ThumbContainer({ thumbnails }) {
  return (
    <div className="thumb-container">
      {thumbnails.map((t) => (
        <VideoThumbnail key={t.id} image={t.video} description={t.alt} />
      ))}
    </div>
  );
}
