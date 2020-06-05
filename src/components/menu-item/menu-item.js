import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  const clickHandler = () => {
    history.push(`${match.url}${linkUrl}`);
  };
  return (
    <div className={`menu-item ${size}`} onClick={clickHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
