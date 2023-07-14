import styled from 'styled-components';

interface ICollapsibleContainer {
  isTitle: boolean;
}

export const CollapsibleContainer = styled.div<ICollapsibleContainer>`
  .Collapsible__trigger {
    ${({ title, isTitle }) => {
      let backgroundColor = '#f7f7f7';
      let color = '#000000';

      switch (title) {
        case 'Demográfica':
          backgroundColor = '#7B4BB2';
          break;
        case 'Demographic':
          backgroundColor = '#7B4BB2';
          break;
        case 'Economia':
          backgroundColor = '#147A99';
          break;
        case 'Economy':
          backgroundColor = '#147A99';
          break;
        case 'Empreendedorismo':
          backgroundColor = '#F9B180';
          break;
        case 'Entrepreneurship':
          backgroundColor = '#F9B180';
          break;
        case 'Saúde':
          backgroundColor = '#58DBAC';
          break;
        case 'Health':
          backgroundColor = '#58DBAC';
          break;
        case 'Educação':
          backgroundColor = '#BB8BEA';
          break;
        case 'Education':
          backgroundColor = '#BB8BEA';
          break;
        case 'Mobilidade':
          backgroundColor = '#CC6262';
          break;
        case 'Mobility':
          backgroundColor = '#CC6262';
          break;
        case 'Segurança':
          backgroundColor = '#157243';
          break;
        case 'Safety':
          backgroundColor = '#157243';
          break;
        case 'Urbanismo':
          backgroundColor = '#104799';
          break;
        case 'Urbanism':
          backgroundColor = '#104799';
          break;
        case 'Meio Ambiente':
          backgroundColor = '#B9DD58';
          break;
        case 'Environment':
          backgroundColor = '#B9DD58';
          break;
        case 'Tecnologia e Inovação':
          backgroundColor = '#64ACED';
          break;
        case 'Technology and inovation':
          backgroundColor = '#64ACED';
          break;
        default:
          break;
      }

      return `
        background-color: ${isTitle ? backgroundColor : '#f7f7f7'} !important;
        color: ${isTitle ? '#ffffff' : color} !important;
        border-radius: 50px;
      `;
    }}

    padding: ${({ isTitle }) => (!isTitle ? '7px 10px 7px 7px' : '7px 10px')} !important;
  }

  .Collapsible__trigger:after {
    ${({ isTitle }) =>
      isTitle ? 'content: url(src/assets/utils/chevron_white.svg)' : 'content: url(src/assets/utils/chevron.svg)'}
  }
`;

