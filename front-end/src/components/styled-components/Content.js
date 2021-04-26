import styled from 'styled-components';

const Content = styled.div`
  background: ${(props) => props.backgroundColor || ''};
  border-radius: 4px;
  max-width: 400px;
  margin: 30px;
  padding: 20px;
  width: 100%;
`;

export default Content;
