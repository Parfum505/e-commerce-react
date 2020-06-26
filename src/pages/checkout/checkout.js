import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selectors";
import {
  CheckoutPageContainer,
  CheckoutHeader,
  CheckoutBlock,
  Total,
  Warning,
} from "./checkout.styles";
import CheckoutItems from "../../components/checkout-items/checkout-items";
import StripeCheckoutButton from "../../components/stripe/stripe-button/stripe-button";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <CheckoutBlock>
        <span>Product</span>
      </CheckoutBlock>
      <CheckoutBlock>
        <span>Description</span>
      </CheckoutBlock>
      <CheckoutBlock>
        <span>Quantyti</span>
      </CheckoutBlock>
      <CheckoutBlock>
        <span>Price</span>
      </CheckoutBlock>
      <CheckoutBlock>
        <span>Remove</span>
      </CheckoutBlock>
    </CheckoutHeader>
    <CheckoutItems items={cartItems} />
    <Total>
      <span>Total:&nbsp;${cartTotal}</span>
    </Total>
    <Warning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
    </Warning>
    {cartTotal ? <StripeCheckoutButton price={cartTotal} /> : null}
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
