import styled from 'styled-components';

export const PopperContainer = styled.div`
  z-index: 1;
`;

export const PopperItens = styled.ul`
  max-height: 400px;
  overflow-y: auto;

  padding: 0;
  margin-top: 10px;

  background: white;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25), 0px -1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  list-style-type: none;
`;

interface PopperItemProps {
  hasHighlight: boolean;
}

export const PopperItem = styled.li<PopperItemProps>`
  padding: 12px 15px;

  background-color: ${({ hasHighlight }) => (hasHighlight ? '#f2f2f2' : 'white')};
`;

export const PopperTitle = styled.h4`
  font-weight: 500;
  margin: 0;
`;

export const PopperSubtitle = styled.h5`
  color: #333333;
  margin-bottom: 0;
  margin-top: 6px;
`;
