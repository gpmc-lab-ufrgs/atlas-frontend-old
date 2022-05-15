import styled from 'styled-components';

import { Close } from '@mui/icons-material';

export const ModalContainer = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: 6;

  display: flex;
  justify-content: center;
`;

export const ModalDimScreen = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.5);

  pointer-events: auto;
`;

export const ModalWrapper = styled.div`
  max-width: 680px;
  flex-basis: 680px;
  margin: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 0;

  pointer-events: none;
`;

export const ModalDialog = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #ffffff;

  border-radius: 8px;

  pointer-events: auto;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 30px 40px 20px 40px;

  border-bottom: 1px solid #ccc;
`;

export const Title = styled.h2`
  margin: 0;

  line-height: 20px;
  font-weight: 500;
`;

export const CloseButton = styled(Close)`
  cursor: pointer;

  color: #999999;
`;

export const ModalContent = styled.div`
  font-size: 14px;
  line-height: 150%;

  padding: 20px 40px;
  margin: 30px 0px;

  overflow-y: auto;

  h1 {
    margin-top: 20px;
    margin-bottom: 20px;

    font-size: 24px;
    font-weight: 700;
  }

  h2 {
    margin-top: 25px;
    margin-bottom: 15px;

    font-size: 24px;
    font-weight: 700;
  }

  p {
    margin-top: 0;
    margin-bottom: 15px;
  }

  a {
    color: #0099e5;
  }
`;
