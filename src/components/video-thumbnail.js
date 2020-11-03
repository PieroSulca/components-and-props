import React from "react";

export default function VideoThumbnail({ image, description }) {
  return (
    <div className="thumbnail">
      <img src={image} alt={description} />
    </div>
  );
}
