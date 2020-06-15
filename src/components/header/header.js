import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import fadeHOC from "../../hoc/cssTransition";

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
  };
  const transitionProps = {
    in: !props.cartHidden,
    timeout: { appear: 0, enter: 300, exit: 0 },
    appear: true,
    classNames: "display",
    unmountOnExit: true,
    exit: false,
  };
  const DropdownCart = fadeHOC(transitionProps)(CartDropdown);
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
          <CartIcon />
        </div>
        <DropdownCart />
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cartHidden: state.cart.cartHidden,
});
// const mapDispatchToProps = (dispatch) => ({
//   signOutHandler: () => dispatch(signOut()),
// });
export default connect(mapStateToProps)(Header);
