import React from "react";
import { ReactComponent as ShopingIcon } from "../../assets/images/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import "./cart-icon.scss";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

const CartIcon = ({ toggleCarHandler, cartItemsSum }) => (
  <div className="cart-icon" onClick={toggleCarHandler}>
    <ShopingIcon className="shopping-icon" />
    <span className="item-count">{cartItemsSum}</span>
  </div>
);

const mapStateToProps = (state) => ({
  cartItemsSum: selectCartItemsCount(state),
});
const mapDispatchToProps = (dispatch) => ({
  toggleCarHandler: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
