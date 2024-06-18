import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.scss";

function Navbar() {
  const menuRef = useRef();
  const menuContentRef = useRef();
  const openMenuRef = useRef();
  const closeMenuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        closeMenuRef.current.style.display === "flex"
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showMenu = () => {
    menuContentRef.current.style.display = "flex";
    closeMenuRef.current.style.display = "flex";
    openMenuRef.current.style.display = "none";
    setTimeout(() => {
      menuRef.current.style.right = "0";
    }, 10);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-500px";
    setTimeout(() => {
      closeMenuRef.current.style.display = "none";
      menuContentRef.current.style.display = "none";
      openMenuRef.current.style.display = "flex";
    }, 500); // Match the CSS transition duration
  };

  return (
    <div className="Navbar">
      <Link to="/">
        <div className="logo">
          <img src="./images/logo-1.ico" alt="altimage" />
        </div>
      </Link>
      <div onClick={showMenu} ref={openMenuRef} className="menu-icon">
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div ref={menuRef} className="menu">
        <div onClick={closeMenu} ref={closeMenuRef} className="close-icon">
          <div className="line line1"></div>
          <div className="line line2"></div>
        </div>
        <div ref={menuContentRef} className="menu-content">
          <div className="menu-items">
            <Link onClick={closeMenu} to="/">
              Home
            </Link>
            <Link onClick={closeMenu} to="/about">
              About Us
            </Link>
            <Link onClick={closeMenu} to="/start-your-project">
              Contact Us
            </Link>
          </div>
          <Link to="/start-your-project">
            <div className="explore-more">
              <button onClick={closeMenu} className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Start Your Project</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
