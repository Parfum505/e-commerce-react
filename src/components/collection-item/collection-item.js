import React from "react";
import { withRouter } from "react-router-dom";
import "./collection-item.scss";
import FormButton from "../form-button/form-button";

const CollectionItem = ({ id, imageUrl, name, price, history, match }) => {
  const clickHandler = () => {
    // history.push(`${match.url}${linkUrl}`);
  };
  return (
    <div className="collection-item" onClick={clickHandler}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <FormButton classes="inverted" handleClick={clickHandler}>
        Add to cart
      </FormButton>
    </div>
  );
};

export default withRouter(CollectionItem);
