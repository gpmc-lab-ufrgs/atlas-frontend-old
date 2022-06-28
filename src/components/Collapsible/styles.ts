import styled from 'styled-components';

interface ICollapsibleContainer {
  isTitle: string;
}

export const CollapsibleContainer = styled.div<ICollapsibleContainer>`
  .Collapsible__trigger  {
    background-color: ${({ isTitle }) => (isTitle == 'collapsibleTitle' ? '#509e2f' : '#ffffff')}!important;
  }
`;
