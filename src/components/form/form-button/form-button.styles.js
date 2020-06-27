import styled from "styled-components";

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  margin: 5px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 10px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease-out;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  &.google-sign-in {
    background-color: #4285f4;
    color: white;
    border-color: #4285f4;
    &:hover {
      background-color: #1f6de8;
      color: white;
      border-color: #1f6de8;
    }
  }

  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
  &.disabled,
  &.disabled:hover,
  &:disabled,
  &:disabled:hover {
    background-color: grey;
    color: white;
    border-color: grey;
    cursor: not-allowed;
  }
`;
