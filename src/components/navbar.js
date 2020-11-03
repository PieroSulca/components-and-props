import React from "react";
import Logo from "./logo";
import SearchBar from "./search-bar";
import NavIcon from "./navIcon";
import Login from "./login";

export default function Navbar({ logo, menuIcons }) {
  return (
    <div className="navbar">
      <Logo logo={logo} />
      <SearchBar />
      {menuIcons.map((i) => (
        <NavIcon key={i.id} navIcon={i.icon} description={i.alt} />
      ))}
      <Login />
    </div>
  );
}
