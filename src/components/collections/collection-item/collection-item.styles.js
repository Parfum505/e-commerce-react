import styled from "styled-components";

export const CollectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  min-width: 22%;
  margin: 10px;
  margin-bottom: 30px;
  flex: 0 1 220px;
  position: relative;
  transition: all 0.3s ease-out;
  .custom-button {
    width: 80%;
    opacity: 0.7;
    margin: auto auto 30px;
    display: none;
  }

  &:hover {
    > div:first-child {
      opacity: 0.8;
    }
    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;
export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    margin-bottom: 15px;
  }
`;
