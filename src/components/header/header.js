import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const Header = () => {
  const [fixed, setFixed] = useState("");
  useEffect(() => {
    const handleOnScroll = () => {
      window.pageYOffset > 200 ? setFixed("fixed") : setFixed("");
    };
    window.addEventListener("scroll", handleOnScroll, true);
    return () => {
      window.removeEventListener("scroll", handleOnScroll, true);
    };
  }, []);

  return (
    <header className={`header ${fixed}`}>
      <div className="header-inner">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
