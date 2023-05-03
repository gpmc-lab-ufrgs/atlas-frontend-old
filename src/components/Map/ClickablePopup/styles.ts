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

export const PopupContent = styled.div`
  padding: 0px 2px;
`;

export const PopupText = styled.h5`
  padding: 2px;
`;

export const IconWrapper = styled.div`
  color: white;
  background-color: black;

  border-radius: 50%;

  width: 20px;
  height: 20px;

  margin-left: 5px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

export const Button = styled.button`
  background-color: #509e2f;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  :hover {
    background-color: #417b23;
  }
`;
