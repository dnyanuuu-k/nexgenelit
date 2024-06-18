import React, { useRef } from "react";
import "../Navbar/Navbar.scss";
import { Link } from "react-router-dom";
function Navbar() {
  const line1 = useRef();
  const line2 = useRef();
  const openMenu = useRef();
  const closeMenu = useRef();
  const menu = useRef();
  const menuClontent = useRef();

  const showMenu = () => {
    menuClontent.current.style.display = "flex";
    closeMenu.current.style.display = "flex";
    openMenu.current.style.display = "none";
    menu.current.style.right = "0";
  };
  const close = () => {
    menuClontent.current.style.display = "none";
    closeMenu.current.style.display = "none";
    openMenu.current.style.display = "flex";
    menu.current.style.right = "-500";
  };

  return (
    <div className="Navbar">
      <Link to="/">
        <div className="logo">
          <img width={70} src="./images/logo-1.ico" alt="alt-image" />
        </div>
      </Link>
      <div onClick={showMenu} ref={openMenu} className="menu-icon">
        <div ref={line1} className="line line1"></div>
        <div ref={line2} className="line line2"></div>
      </div>
      <div ref={menu} className="menu">
        <div onClick={close} ref={closeMenu} className="close-icon">
          <div ref={line1} className="line line1"></div>
          <div ref={line2} className="line line2"></div>
        </div>
        <div ref={menuClontent} className="menu-content">
          <div className="menu-items">
            <Link onClick={close} to="/">
              Home
            </Link>
            {/* <Link onClick={close} to="/work">
              Work
            </Link> */}
            <Link onClick={close} to="/about">
              About Us
            </Link>
            <Link onClick={close} to="/start-your-project">
              Contact Us
            </Link>
          </div>
          <Link to="/start-your-project">
            <div className="explore-more">
              <button onClick={close} className="learn-more">
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
