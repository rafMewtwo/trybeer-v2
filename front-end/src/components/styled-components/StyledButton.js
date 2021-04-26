import styled from 'styled-components';

const FIFTYPERCENT = 0.5;

const StyledButton = styled.button`
  background: #ffc72c;
  border: none;
  color: #000;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: inline-block;
  font-size: 18px;
  margin: 12px 0;
  opacity: ${(props) => (props.disabled ? FIFTYPERCENT : '')};
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  width: 100%;
  &:hover {
    background: ${(props) => (props.disabled ? '' : '#441311')};
    color: ${(props) => (props.disabled ? '' : '#fff')};
  }
`;

export default StyledButton;
