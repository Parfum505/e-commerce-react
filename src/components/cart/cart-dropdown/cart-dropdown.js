import React from "react";
import { connect } from "react-redux";
import FormButton from "../../form/form-button/form-button";
import "./cart-dropdown.scss";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../../redux/cart/cart-selectors";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <FormButton>GO TO CHECKOUT</FormButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
