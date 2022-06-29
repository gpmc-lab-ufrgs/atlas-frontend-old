import styled from 'styled-components';

interface ICollapsibleContainer {
  isTitle: string;
}

export const CollapsibleContainer = styled.div<ICollapsibleContainer>`
  .Collapsible__trigger  {
    background-color: ${({ isTitle }) => (isTitle == 'collapsibleTitle' ? '#4A7729' : '#ffffff')}!important;
    color: ${({ isTitle }) => (isTitle == 'collapsibleTitle' ? '#ffffff' : '#000000')}!important;
  }
`;
