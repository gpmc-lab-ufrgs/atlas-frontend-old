import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 60px;
  background-color: #191a1a;
`;

interface IInstitutionsLogo {
  size: number;
}

export const InstitutionsLogo = styled.img<IInstitutionsLogo>`
  height: ${({ size }) => size}px;
  opacity: 50%;
  padding-right: 30px;
`;

export const FooterText = styled.h2`
  color: #8b8c8c;
  font-weight: 400;
  font-size: 15px;
  padding-right: 10px;
`;
