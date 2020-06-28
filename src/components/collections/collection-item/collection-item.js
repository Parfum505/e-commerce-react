import React from "react";
import { connect } from "react-redux";
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
} from "./collection-item.styles";
import FormButton from "../../form/form-button/form-button";
import { addItem } from "../../../redux/cart/cart-actions";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <FormButton classes="inverted" onClick={(name) => addItem(item)}>
          Add to cart
        </FormButton>
      </ImageContainer>
      <CollectionFooterContainer>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
