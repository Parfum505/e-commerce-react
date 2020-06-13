import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = (props) => {
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

  const handleSignOut = () => {
    auth.signOut();
    // props.signOutHandler();
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
          {props.currentUser ? (
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
// const mapDispatchToProps = (dispatch) => ({
//   signOutHandler: () => dispatch(signOut()),
// });
export default connect(mapStateToProps)(Header);
