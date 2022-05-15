import styled from 'styled-components';

interface ITable {
  lineTableNumber: number;
}

export const Table = styled.div<ITable>`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;

  font-weight: 500;
  font-size: 14px;

  padding: 8px 10px;

  background-color: ${({ lineTableNumber }) => (lineTableNumber % 2 === 0 ? 'white' : '#f5f5f5')};
  border-radius: 2px;
`;

export const ColumnTitle = styled.div`
  grid-column: 1;
  font-weight: 600;

  padding-right: 5px;
`;

interface IColumn {
  gridColumnNumber: number;
}

export const Column = styled.div<IColumn>`
  grid-column: ${({ gridColumnNumber }) => gridColumnNumber};
  justify-self: start;
  align-self: center;
`;
