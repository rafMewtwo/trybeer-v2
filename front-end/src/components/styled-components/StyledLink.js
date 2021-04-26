import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
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
`;

export default StyledLink;
