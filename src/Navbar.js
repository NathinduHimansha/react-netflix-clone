import React, { useState, useEffect } from "react";
import logo from "./netflix_logo.png";
import "./Nav.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {}); //removing actived event lister(avoid dupllication)
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="netflix-logo" />
    </div>
  );
}

export default Navbar;
