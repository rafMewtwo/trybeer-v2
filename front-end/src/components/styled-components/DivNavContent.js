import styled from 'styled-components';

const DivNavContent = styled.div`
margin-top: 30px;
position: relative;
text-align: center;
top: 25%;
width: 100%;
a {
    color: whitesmoke;
    display: block;
    font-size: 26px;
    padding: 15px 20px;
    text-decoration: none;
    transition: 0.3s;
    &:focus,
    &:hover {
      color: #ffc72c;
    }
  }
`;

export default DivNavContent;
