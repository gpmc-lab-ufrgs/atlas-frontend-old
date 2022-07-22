import styled from 'styled-components';
import chevron_white from '@assets/chevron_white.svg';
import chevron from '@assets/chevron.svg';

interface ICollapsibleContainer {
  isTitle: boolean;
}

export const CollapsibleContainer = styled.div<ICollapsibleContainer>`
  .Collapsible__trigger  {
    background-color: ${({ isTitle }) => (isTitle ? '#4A7729' : '#ffffff')}!important;
    color: ${({ isTitle }) => (isTitle ? '#ffffff' : '#000000')}!important;
  }

  .Collapsible__trigger:after {
    ${({ isTitle }) => isTitle ? `content: url(${chevron_white})` : `content: url(${chevron})`}
  }
`;
