import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/styles/NavBar.css";

const NavBar = ({ setCategory }) => {
  return (
    <div className="navbar">
      <img
        src={logo}
        alt="News Logo"
      />
      <div className="options">
        <button onClick={() => setCategory("business")}>Business</button>
        <button onClick={() => setCategory("entertainment")}>Entertainment</button>
        <button onClick={() => setCategory("general")}>General</button>
        <button onClick={() => setCategory("health")}>Health</button>
        <button onClick={() => setCategory("science")}>Science</button>
        <button onClick={() => setCategory("sports")}>Sports</button>
        <button onClick={() => setCategory("technology")}>Technology</button>
      </div>
    </div>
  );
};

export default NavBar;
