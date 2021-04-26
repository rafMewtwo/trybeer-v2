import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  font-weight: 600;
  margin: 20px 0 20px 0;
  width: 80%;
  tr:nth-child(even){background-color: #f2f2f2;}
  tr:hover {background-color: #ddd;}
  td, th {
    padding: 3px;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
  }
`;

export default Table;
