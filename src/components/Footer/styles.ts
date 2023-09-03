import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 60px;
  background-color: #032640;
`;

interface IInstitutionsLogo {
  size: number;
}

export const InstitutionsLogo = styled.img<IInstitutionsLogo>`
  height: ${({ size }) => size}px;
  padding-right: 15px;
`;

export const FooterText = styled.h2`
  color: #ffff;
  font-weight: 400;
  font-size: 15px;
  padding-right: 10px;
`;
