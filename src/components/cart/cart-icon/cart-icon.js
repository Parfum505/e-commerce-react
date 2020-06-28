import React from "react";
import { ReactComponent as ShopingIcon } from "../../../assets/images/shopping-bag.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../../redux/cart/cart-actions";
import { CartIconContaiter, ItemCountContaiter } from "./cart-icon.styles";
import { selectCartItemsCount } from "../../../redux/cart/cart-selectors";

const CartIcon = ({ toggleCartHandler, cartItemsSum }) => (
  <CartIconContaiter onClick={toggleCartHandler}>
    <ShopingIcon className="shopping-icon" />
    <ItemCountContaiter>{cartItemsSum}</ItemCountContaiter>
  </CartIconContaiter>
);

const mapStateToProps = createStructuredSelector({
  cartItemsSum: selectCartItemsCount,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHandler: () => dispatch(toggleCartHidden()),
});
export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(CartIcon)
);
