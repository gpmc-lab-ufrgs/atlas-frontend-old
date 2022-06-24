import styled from 'styled-components';

export const Popup = styled.div`
  cursor: default;
  pointer-events: all;
`;

export const ClickableSection = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  cursor: pointer;
  pointer-events: all;

  border: none;
  padding: 5px 2px;

  background: none;

  :hover {
    .iconAction {
      background-color: #509e2f;
    }
  }
`;

export const PopupText = styled.h5`
  margin: 0px;
`;

export const IconWrapper = styled.div`
  color: white;
  background-color: black;

  border-radius: 50%;

  width: 20px;
  height: 20px;

  margin-left: 5px;
`;
