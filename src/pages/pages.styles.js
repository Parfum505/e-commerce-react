import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 75px 5% 0;
  max-width: 1200px;
  margin: auto;

  @media all and (min-width: 768px) {
    padding: 80px 80px 0;
  }
`;
