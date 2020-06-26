import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 380px;
  transition: all 0.3s ease-out;
  position: relative;
  margin: auto;
  text-align: center;
  &.display-enter {
    opacity: 0;
    transform: translateX(-1000px);
  }
  &.display-enter-active {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -5px;
`;
