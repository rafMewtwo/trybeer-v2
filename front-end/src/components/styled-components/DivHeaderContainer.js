import styled from 'styled-components';

const DivHeaderContainer = styled.header`
  background: ${(props) => (
    props.admin ? '#26547C' : 'linear-gradient(to right, #ba0c2f 0%, #451311 100%)')};
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index:1000;
  position: relative;
`;

export default DivHeaderContainer;
