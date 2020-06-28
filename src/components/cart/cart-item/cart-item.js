import React from "react";
import { CartItemContainer, ItemDetailsContainer } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity}&nbsp;x&nbsp;${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
