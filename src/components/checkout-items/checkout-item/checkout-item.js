import React from "react";
import "./checkout-item.scss";
import { connect } from "react-redux";
import { deleteItem, addItem, clearItem } from "../../../redux/cart/cart-actions";

const CheckoutItem = ({
  item,
  deleteItemHandler,
  addItemHandler,
  clearItemHandler,
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={item.imageUrl} alt="item" />
    </div>
    <div className="name">{item.name}</div>
    <div className="quantity">
      <div className="arrow" onClick={() => deleteItemHandler(item)}>
        &#10094;
      </div>
      <span className="value">{item.quantity}</span>
      <div className="arrow" onClick={() => addItemHandler(item)}>
        &#10095;
      </div>
    </div>
    <div className="price">${item.price}</div>
    <div className="remove-button" onClick={() => clearItemHandler(item)}>
      <span role="img" aria-label="Remove">
        &#10060;
      </span>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearItemHandler: (item) => dispatch(clearItem(item)),
  addItemHandler: (item) => dispatch(addItem(item)),
  deleteItemHandler: (item) => dispatch(deleteItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
