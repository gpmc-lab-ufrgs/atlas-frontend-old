import React from 'react';

import * as Styles from './styles';

const ErrorState: React.FC = () => {
  return (
    <Styles.Container>
        <Styles.ContentContainer>
            <Styles.Refresh fontSize="large"></Styles.Refresh>
            <Styles.TextDiv>
                <Styles.Text>An unexpected error has occurred.</Styles.Text>
                <Styles.Text>Please try again!</Styles.Text>
            </Styles.TextDiv>
        </Styles.ContentContainer>
    </Styles.Container>
  );
};

export default ErrorState;
