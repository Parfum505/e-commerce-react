import React from "react";
import { ReactComponent as ShopingIcon } from "../../../assets/images/shopping-bag.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../../redux/cart/cart-actions";
import "./cart-icon.scss";
import { selectCartItemsCount } from "../../../redux/cart/cart-selectors";

const CartIcon = ({ toggleCarHandler, cartItemsSum }) => (
  <div className="cart-icon" onClick={toggleCarHandler}>
    <ShopingIcon className="shopping-icon" />
    <span className="item-count">{cartItemsSum}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItemsSum: selectCartItemsCount,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCarHandler: () => dispatch(toggleCartHidden()),
});
export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(CartIcon)
);
