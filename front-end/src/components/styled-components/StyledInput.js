import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid #08c;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: text;
  display: inline;
  font-size: 16px;
  margin: 6px 0px;
  padding: 14px 20px;
  width: ${(props) => (props.checkbox ? '20%' : '100%')};
  &:active,
  &:focus {
    background-color: lightblue;
    border: 3px solid #08c;
  }
`;

export default StyledInput;
