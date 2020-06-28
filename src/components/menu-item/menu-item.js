import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  const clickHandler = () => {
    history.push(`${match.url}${linkUrl}`);
  };
  return (
    <MenuItemContainer className={size} onClick={clickHandler}>
      <BackgroundImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></BackgroundImageContainer>
      <ContentContainer className="content">
        <h1>{title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
