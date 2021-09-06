import React, { useState } from "react";
import "./navbar.css";
import { ReactComponent as BurgerMenu } from "../../assets/icons/Vector.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

const Navbar: React.FC = () => {
  const [state, setstate] = useState(false);
  return (
    <div>
      <div className="navbar">
        <div className="logo">C-Loot</div>
        <div className="nav-links">
          <a href="/">FAQ</a>
          <a href="/" style={{ marginLeft: "4.5vw" }}>
            Resources
          </a>
        </div>
      </div>
      <div className="slide-menu">
        {state && <div className="backdrop-back"></div>}
        <BurgerMenu
          className={state ? "slide-menu-icon active" : "slide-menu-icon"}
          onClick={() => setstate(!state)}
        />
        <div className={state ? "menu-content active" : "menu-content"}>
          <Close onClick={() => setstate(!state)} className="content-x-icon" />
          <div className="mint-your-tesla-slid"></div>
          <div className="slide-menu-logo">
            <h3>C-Loot</h3>
            <div className="slider-links">
              <a href="/">FAQ</a>
              <a href="/">Resources</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
