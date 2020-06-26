import styled from "styled-components";
import { PageContainer } from "../pages.styles";

export const AuthPageContainer = styled(PageContainer)`
  overflow-x: hidden;
  > button {
    display: block;
    margin: 1rem auto;
    color: #4285f4;
    border: none;
    background-color: transparent;
    &:hover,
    &:active,
    &:focus {
      background-color: transparent;
      color: #4285f4;
      border: none;
      outline: none;
    }
  }
`;
export const Label = styled.div`
  span {
    color: #a5a3a3;
  }
`;
