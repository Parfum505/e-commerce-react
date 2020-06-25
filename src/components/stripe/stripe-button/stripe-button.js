import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { clearAllItems } from "../../../redux/cart/cart-actions";

const StripeCheckoutButton = ({ price, clearAllItemsHandler }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GxxPBIQf4t2bfJRx2DnlRbDE0Ellhb5eFrnBu3p02QHW0RaDix9BhraVNTSOQRK5L6UC9O0cw0YvEfXyBoXEFsp00sDtlVRBb";
  const onToken = (token) => {
    console.log(token);
    clearAllItemsHandler();
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="E-commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearAllItemsHandler: () => dispatch(clearAllItems()),
});
export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
