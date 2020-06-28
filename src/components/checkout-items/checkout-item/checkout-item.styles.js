import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  &.move-enter {
    opacity: 0.01;
    transform: translate(-100px, 0);
  }
  &.move-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms ease-in;
  }

  &.move-exit {
    opacity: 1;
    transform: translate(0, 0);
  }

  &.move-exit-active {
    opacity: 0.01;
    transform: translate(100px, 0);
    transition: all 500ms ease-in;
  }
  .name,
  .price {
    width: 23%;
  }
`;
export const ImagemContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const QuantityContainer = styled.div`
  display: flex;
  width: 23%;
  .arrow {
    cursor: pointer;
  }
  .value {
    margin: 0 10px;
  }
`;
export const RemoveButtonContainer = styled.div`
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    transform: rotate(90deg);
  }
`;
