import styled from 'styled-components';

const DivNavContainer = styled.div`
  background: ${(props) => (
    props.isAdmin ? '#26547C' : 'linear-gradient(to right, #ba0c2f 0%, #451311 100%)')};
  height: 100%;
  left: 0;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  transition: 0.5s;
  z-index: 1;
`;

export default DivNavContainer;
