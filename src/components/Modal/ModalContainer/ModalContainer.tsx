import React from 'react';

import { useHistory } from 'react-router-dom';

import * as Styles from './styles';

const ModalContainer = ({ title, children }: any) => {
  const history = useHistory();

  return (
    <Styles.ModalContainer>
      <Styles.ModalDimScreen onClick={history.goBack} />

      <Styles.ModalWrapper>
        <Styles.ModalDialog>
          <Styles.ModalHeader>
            <Styles.Title>{title}</Styles.Title>
            <Styles.CloseButton onClick={history.goBack} />
          </Styles.ModalHeader>

          <Styles.ModalContent>{children}</Styles.ModalContent>
        </Styles.ModalDialog>
      </Styles.ModalWrapper>
    </Styles.ModalContainer>
  );
};

export default ModalContainer;
