import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background: ${(props) => props.backgroundColor || ''};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export default Container;
