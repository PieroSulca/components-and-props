import React from "react";
import Icon from "./icon";

export function Sidebar({ icons }) {
  return (
    <div className="sidebar">
      {icons.map((i) => (
        <Icon key={i.id} iconUrl={i.icon} title={i.title} />
      ))}
    </div>
  );
}
