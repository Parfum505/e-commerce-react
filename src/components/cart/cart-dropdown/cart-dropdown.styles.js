import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 40px;
  z-index: 5;
  transition: all 0.3s ease;

  &.display-enter,
  &.display-appear {
    opacity: 0;
    height: 0;
  }
  &.display-enter-active,
  &.display-appear-active {
    opacity: 1;
    height: 340px;
  }

  button {
    margin: auto 0 0;
    padding: 0;
  }
`;
export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-bottom: 20px;

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }
`;
