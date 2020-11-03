import React from "react";

export default function NavIcon({ navIcon, description }) {
  return (
    <div className="navIcon">
      <img src={navIcon} alt={description} />
    </div>
  );
}
