import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";
import { ReactComponent as Logo } from "../../../assets/images/crown.svg";
import NavLinks from "./nav-links/nav-links";
import MenuBtnMobile from "./nav-mobile-btn/nav-mobile-btn";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMenu((prevState) => !prevState);
  }, []);

  return (
      <nav>
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <NavLinks clicked={toggleMobileMenu} showMenu={showMenu} />
        <MenuBtnMobile clicked={toggleMobileMenu} showMenu={showMenu} />
      </nav>
  );
};

export default React.memo(Navigation);
