import React from "react";
import FormButton from "../form-button/form-button";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <FormButton>GO TO CHECKOUT</FormButton>
    </div>
  );
};

export default CartDropdown;
