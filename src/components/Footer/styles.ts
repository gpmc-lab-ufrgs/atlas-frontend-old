import styled from "styled-components";

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
  opacity: 45%;
`;
