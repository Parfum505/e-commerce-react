import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const Header = () => {
  const [fixed, setFixed] = useState("");
  useEffect(() => {
    const handleOnScroll = () => {
      window.scrollY > 200 ? setFixed("fixed") : setFixed("");
    };
    window.addEventListener("scroll", handleOnScroll, true);
    return () => {
      window.removeEventListener("scroll", handleOnScroll, true);
    };
  }, []);

  return (
    <header className={`header ${fixed}`}>
      <nav>
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <NavLink className="option" to="/shop">
            SHOP
          </NavLink>
          <NavLink className="option" to="/contact">
            CONTACT
          </NavLink>
          <NavLink className="option" to="/sign-in">
            SIGN IN
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
