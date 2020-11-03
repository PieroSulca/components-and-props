import React from "react";

export default function Icon({ iconUrl, title }) {
  return (
    <div className="icon">
      <img src={iconUrl} alt="icon" />
      <p>{title}</p>
    </div>
  );
}
