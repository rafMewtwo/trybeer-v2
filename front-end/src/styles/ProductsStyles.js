import styled from 'styled-components';

export const Card = styled.div`
  background: linear-gradient(to bottom right, #ba0c2f 0%, #ff992c 100%);
  box-shadow: 0 4px 8px 0;
  display: grid;
  font-family: Arial, Helvetica, sans-serif;
  grid-template-rows: max-content 100px 1fr;
`;

export const Title = styled.h3`
  font-size: 1.5em;
  margin-top: 22px;
  text-align: center;
`;

export const SpanPrice = styled.p`
  font-size: 22px;
  text-align: center;
`;

export const SpanTotalPrice = styled.span`
  font-size: 1.75em;
  font-weight: 900;
  padding: 20px 12px;
`;

export const DivInfoCart = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 100px;
`;

export const DivQuantity = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
`;

export const ListCardOfProducts = styled.div`
  background-color: green;
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonMinAndPlus = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 30px;
  margin: 4px 10px;
  padding: 4px 10px;
  &:hover {
    background-color: #ba0c2f;
    color: white;
  }
  &:active {
  background-color: #ba0c2f;
  transform: translateY(2px);
  }
`;

export const Content = styled.div`
background-color: #f2f2f2;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
  width: 80%;
  padding: 30px 10px;
`;
export const ButtonCart = styled.button`
  background-color: #ff6a13;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.25em;
  font-weight: 800;
  padding: 0 26px;
  &:hover {
    background-color: #d55000;
  }
`;
