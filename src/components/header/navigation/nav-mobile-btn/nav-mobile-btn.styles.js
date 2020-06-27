import styled from "styled-components";

export const MobileBtnsContainer = styled.div`
  cursor: pointer;
  transition: all 0.3s ease-out;

  > div {
    background: #a5a3a3;
    width: 28px;
    height: 4px;
    margin-bottom: 5px;
    transition: all 0.3s ease-out;
    &:last-child {
      margin: 0;
    }
  }
  &:hover {
    div {
      background-color: black;
    }
  }
  &.active {
    transform: rotate(180deg);
    > div {
      background-color: black;
      &:nth-child(1) {
        transform: rotate(45deg) translate(7px, 5px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(8px, -5px);
      }
    }
  }

  @media all and (min-width: 481px) {
    display: none;
  }
`;
