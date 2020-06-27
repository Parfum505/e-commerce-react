import React from "react";
import { MobileBtnsContainer } from "./nav-mobile-btn.styles";

const MenuBtnMobile = (props) => (
  <MobileBtnsContainer
    className={`${props.showMenu ? "active" : ""}`}
    onClick={props.clicked}
  >
    <div></div>
    <div></div>
    <div></div>
  </MobileBtnsContainer>
);

export default React.memo(MenuBtnMobile);
