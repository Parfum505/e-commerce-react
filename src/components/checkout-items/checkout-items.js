import React from "react";
import CheckoutItem from "./checkout-item/checkout-item";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const CheckoutItems = ({ items }) => {
  return (
    <TransitionGroup>
      {items.map((item) => (
        <CSSTransition key={item.id} timeout={300} classNames="move">
          <CheckoutItem item={item} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default CheckoutItems;
