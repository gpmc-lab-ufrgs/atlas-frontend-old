import styled from 'styled-components';

interface IReturnRoute {
  selectedLayer: string;
}

export const ReturnRoute = styled.div<IReturnRoute>`
  font-size: 20px;
  white-space: nowrap;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  pointer-events: auto;

  .country {
    font-weight: ${({ selectedLayer }) => (selectedLayer === 'country' ? 'bold' : 'normal')};
  }

  .state {
    font-weight: ${({ selectedLayer }) => (selectedLayer === 'state' ? 'bold' : 'normal')};
  }

  .district {
    font-weight: ${({ selectedLayer }) => (selectedLayer === 'district' ? 'bold' : 'normal')};
  }
`;

export const ReturnRouteButton = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: white;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
