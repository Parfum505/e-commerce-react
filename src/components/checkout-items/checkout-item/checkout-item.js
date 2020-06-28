import React from "react";
import {
  CheckoutItemContainer,
  ImagemContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";
import { connect } from "react-redux";
import {
  deleteItem,
  addItem,
  clearItem,
} from "../../../redux/cart/cart-actions";

const CheckoutItem = ({
  item,
  deleteItemHandler,
  addItemHandler,
  clearItemHandler,
}) => (
  <CheckoutItemContainer>
    <ImagemContainer>
      <img src={item.imageUrl} alt="item" />
    </ImagemContainer>
    <div className="name">{item.name}</div>
    <QuantityContainer>
      <div className="arrow" onClick={() => deleteItemHandler(item)}>
        &#10094;
      </div>
      <span className="value">{item.quantity}</span>
      <div className="arrow" onClick={() => addItemHandler(item)}>
        &#10095;
      </div>
    </QuantityContainer>
    <div className="price">${item.price}</div>
    <RemoveButtonContainer onClick={() => clearItemHandler(item)}>
      <span role="img" aria-label="Remove">
        &#10060;
      </span>
    </RemoveButtonContainer>
  </CheckoutItemContainer>
);

const mapDispatchToProps = (dispatch) => ({
  clearItemHandler: (item) => dispatch(clearItem(item)),
  addItemHandler: (item) => dispatch(addItem(item)),
  deleteItemHandler: (item) => dispatch(deleteItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
