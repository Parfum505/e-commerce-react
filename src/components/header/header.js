import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { authContext } from "../../App";

const Header = () => {
  const [fixed, setFixed] = useState("");
  const { currentUser, setCurrentUser } = useContext(authContext);
  useEffect(() => {
    const handleOnScroll = () => {
      window.scrollY > 200 ? setFixed("fixed") : setFixed("");
    };
    window.addEventListener("scroll", handleOnScroll, true);
    return () => {
      window.removeEventListener("scroll", handleOnScroll, true);
    };
  }, []);

  const handleSignOut = () => {
    auth.signOut();
    setCurrentUser(null);
  };

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
          {currentUser ? (
            <div className="option" onClick={handleSignOut}>
              SIGN OUT
            </div>
          ) : (
            <NavLink className="option" to="/sign-in">
              SIGN IN
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
