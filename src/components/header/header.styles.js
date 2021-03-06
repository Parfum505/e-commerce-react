import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background: white;
  left: 0;
  top: 0;
  position: absolute;
  z-index: 100;
  box-shadow: 0px 0 20px rgba(0, 0, 0, 0.2);
  position: fixed;
`;
export const NavContainer = styled.div`
  margin: auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 5%;
  position: relative;
  @media all and (min-width: 768px) {
    padding: 13px 80px;
  }
`;
