import React from "react";
import { ReactComponent as ShopingIcon } from "../../assets/images/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import "./cart-icon.scss";

const CartIcon = ({ toggleCarHandler }) => (
  <div className="cart-icon" onClick={toggleCarHandler}>
    <ShopingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCarHandler: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
