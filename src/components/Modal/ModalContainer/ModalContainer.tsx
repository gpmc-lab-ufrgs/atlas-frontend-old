import { useNavigate } from 'react-router-dom';

import * as Styles from './styles';

const ModalContainer = ({ title, children }: any) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Styles.ModalContainer>
      <Styles.ModalDimScreen onClick={goBack} />

      <Styles.ModalWrapper>
        <Styles.ModalDialog>
          <Styles.ModalHeader>
            <Styles.Title>{title}</Styles.Title>
            <Styles.CloseButton onClick={goBack} />
          </Styles.ModalHeader>

          <Styles.ModalContent>{children}</Styles.ModalContent>
        </Styles.ModalDialog>
      </Styles.ModalWrapper>
    </Styles.ModalContainer>
  );
};

export default ModalContainer;
