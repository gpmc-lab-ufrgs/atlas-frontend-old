import styled from 'styled-components';

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;

  padding: 10px 25px;
`;

interface ITableItens {
  gridColumnNumber: number;
}

export const TableItens = styled.div<ITableItens>`
  grid-column: ${({ gridColumnNumber }) => gridColumnNumber};
  justify-self: start;
  align-self: center;

  font-weight: bold;
  color: white;

`;
