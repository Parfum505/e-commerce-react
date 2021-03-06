import React, { useState, useCallback } from "react";
import { NavTag, LogoContainer } from "./navigation.styles";
import { ReactComponent as Logo } from "../../../assets/images/crown.svg";
import NavLinks from "./nav-links/nav-links";
import MenuBtnMobile from "./nav-mobile-btn/nav-mobile-btn";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMenu((prevState) => !prevState);
  }, []);

  return (
    <NavTag>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <NavLinks clicked={toggleMobileMenu} showMenu={showMenu} />
      <MenuBtnMobile clicked={toggleMobileMenu} showMenu={showMenu} />
    </NavTag>
  );
};

export default React.memo(Navigation);
