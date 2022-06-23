import styled from 'styled-components';

export const Popup = styled.div`
  cursor: default;
  pointer-events: all;
`;

export const ClickableSection = styled.h5`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  pointer-events: all;
  :hover {
    color: green;
  }
`;
