import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./header.scss";
import CartIcon from "../cart/cart-icon/cart-icon";
import CartDropdown from "../cart/cart-dropdown/cart-dropdown";
import fadeHOC from "../../hoc/cssTransition";
import Navigation from "./navigation/navigation";
import { selectCartHidden } from "../../redux/cart/cart-selectors";

const Header = ({ cartHidden }) => {
  const transitionProps = {
    in: !cartHidden,
    timeout: { appear: 0, enter: 300, exit: 0 },
    appear: true,
    classNames: "display",
    unmountOnExit: true,
    exit: false,
  };
  const DropdownCart = fadeHOC(transitionProps)(CartDropdown);

  return (
    <header className="header">
      <div className="nav-container">
        <Navigation />
        <CartIcon />
        <DropdownCart />
      </div>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  cartHidden: selectCartHidden,
});

export default React.memo(connect(mapStateToProps)(Header));
