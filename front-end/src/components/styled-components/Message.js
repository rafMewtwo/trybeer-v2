import styled from 'styled-components';

const Message = styled.p`
  background: ${(props) => (props.success ? '#4CAF50' : '')};
  color: ${(props) => (props.success ? '#fff' : '')};
  font-size: 1.5em;
  font-weight: 900;
  padding: 20px;
  text-align: center;
`;

export default Message;
