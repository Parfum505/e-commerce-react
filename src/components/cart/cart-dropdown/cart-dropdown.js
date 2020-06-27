import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import FormButton from "../../form/form-button/form-button";
import "./cart-dropdown.scss";
import CartItem from "../cart-item/cart-item";
import { toggleCartHidden } from "../../../redux/cart/cart-actions";
import { selectCartItems } from "../../../redux/cart/cart-selectors";

const CartDropdown = ({ cartItems, toggleCarHandler, history }) => {
  const clickedCheckout = () => {
    toggleCarHandler();
    if (cartItems && cartItems.length) {
      history.push("/checkout");
    }
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems && cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <FormButton
        classes={cartItems && cartItems.length ? [] : ["disabled"]}
        onClick={clickedCheckout}
      >
        GO TO CHECKOUT
      </FormButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCarHandler: () => dispatch(toggleCartHidden()),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
