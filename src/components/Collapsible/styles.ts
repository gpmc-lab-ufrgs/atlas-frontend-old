import styled from 'styled-components';

interface ICollapsibleContainer {
  isTitle: boolean;
}

export const CollapsibleContainer = styled.div<ICollapsibleContainer>`
  .Collapsible__trigger {
    background-color: ${({ isTitle }) => (isTitle ? '#4A7729' : '#f7f7f7')}!important;
    color: ${({ isTitle }) => (isTitle ? '#ffffff' : '#000000')}!important;
    padding: ${({ isTitle }) => (!isTitle ? '7px 10px 7px 7px' : '7px 10px')}!important;
  }

  .Collapsible__trigger:after {
    ${({ isTitle }) =>
      isTitle ? 'content: url(../../assets/utils/chevron_white.svg)' : 'content: url(../../assets/utils/chevron.svg)'}
  }
`;
