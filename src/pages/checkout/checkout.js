import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selectors";
import CheckoutItems from "../../components/checkout-items/checkout-items";
import StripeCheckoutButton from "../../components/stripe/stripe-button/stripe-button";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page pages">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantyti</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    <CheckoutItems items={cartItems} />
    <div className="total">
      <span>Total:&nbsp;${cartTotal}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
    </div>
    {cartTotal ? <StripeCheckoutButton price={cartTotal} /> : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
