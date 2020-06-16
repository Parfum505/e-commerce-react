import React from "react";
import "./nav-mobile-btn.scss";

const MenuBtnMobile = (props) => (
  <div
    className={`menu-btn-mobile ${props.showMenu ? "active" : ""}`}
    onClick={props.clicked}
  >
    <div className="btn-line"></div>
    <div className="btn-line"></div>
    <div className="btn-line"></div>
  </div>
);

export default MenuBtnMobile;
