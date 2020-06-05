import React from "react";
import { withRouter } from "react-router-dom";
import "./collection-item.scss";

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
    </div>
  );
};

export default withRouter(CollectionItem);
