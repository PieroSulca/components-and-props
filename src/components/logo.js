import React from "react";

export default function Logo({ logo }) {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}
