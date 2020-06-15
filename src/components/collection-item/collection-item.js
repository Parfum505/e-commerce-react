import React from "react";
import { connect } from "react-redux";
import "./collection-item.scss";
import FormButton from "../form-button/form-button";
import { addItem } from "../../redux/cart/cart-actions";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <FormButton classes="inverted" handleClick={(name) => addItem(item)}>
        Add to cart
      </FormButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
