import styled from "styled-components";
import { PageContainer } from "../pages.styles";

export const CheckoutPageContainer = styled(PageContainer)`
  margin: 50px auto 0;
  button {
    margin: 30px 0 30px auto;
  }
`;
export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;
export const CheckoutBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`;
export const Total = styled.div`
  margin-top: 30px;
  text-align: right;
  font-size: 36px;
`;
export const Warning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
