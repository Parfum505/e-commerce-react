import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import fadeHOC from "../../hoc/cssTransition";
import MenuBtnMobile from "./nav-mobile-btn/nav-mobile-btn";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";

const Header = (props) => {
  const [fixed, setFixed] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleOnScroll = () => {
      window.scrollY > 250 ? setFixed("fixed") : setFixed("");
    };
    window.addEventListener("scroll", handleOnScroll, true);
    return () => {
      window.removeEventListener("scroll", handleOnScroll, true);
    };
  }, []);

  const handleSignOut = () => {
    auth.signOut();
  };
  const toggleMobileMenu = useCallback(() => {
    setShowMenu((prevState) => !prevState);
  }, []);

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
        <div
          className={`options ${showMenu ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
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
        <MenuBtnMobile clicked={toggleMobileMenu} showMenu={showMenu} />
        <CartIcon />
        <DropdownCart />
      </nav>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});
// const mapDispatchToProps = (dispatch) => ({
//   signOutHandler: () => dispatch(signOut()),
// });
export default connect(mapStateToProps)(Header);
