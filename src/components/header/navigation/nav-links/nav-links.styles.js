import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const OptionsContainer = styled.div`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  width: 100%;
  position: absolute;
  top: 76px;
  left: 0;
  flex-direction: column;
  background-color: white;
  border-top: 1px solid #a5a3a3;
  overflow: hidden;

  @media all and (min-width: 481px) {
    display: flex;
    width: auto;
    flex-direction: row;
    align-items: center;
    border: none;
    position: static;
  }
`;
export const LogoContainer = styled(NavLink)`
  margin-right: auto;
`;
export const OptionNavLink = styled(NavLink)`
  width: 100%;
  padding: 10px 15px;
  font-weight: bold;
  position: relative;
  color: #a5a3a3;
  border-bottom: 1px solid #a5a3a3;
  cursor: pointer;
  text-align: center;
  &:hover,
  &.active {
    color: black;
  }
  @media all and (min-width: 481px) {
    border: none;
    width: auto;
    &:after {
      content: "";
      width: 0;
      height: 2px;
      position: absolute;
      bottom: 5px;
      left: 50%;
      background-color: #bebebe;
      transition: all 0.3s ease-out;
      visibility: hidden;
    }
    &:hover,
    &.active {
      &:after {
        left: 12%;
        width: 76%;
        visibility: visible;
      }
    }
  }
`;
