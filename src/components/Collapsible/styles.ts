import styled from 'styled-components';


interface ICollapsibleContainer {
  isTitle: boolean;
}

export const CollapsibleContainer = styled.div<ICollapsibleContainer>`
  .Collapsible__trigger  {
    background-color: ${({ isTitle }) => (isTitle ? '#4A7729' : '#ffffff')}!important;
    color: ${({ isTitle }) => (isTitle ? '#ffffff' : '#000000')}!important;
  }

`;
