import styled from 'styled-components';

import { ReactComponent as CompareIcon } from '@assets/compare.svg';

export const ComparisonButton = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`;

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 20px;
  margin: 0px 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #000000;

  border: none;
  border-radius: 5px;

  background-color: white;
  cursor: pointer;

  :hover {
    background-color: rgb(239, 239, 239);
  }

  :disabled {
    color: rgb(153, 153, 153);
    background-color: white;
    cursor: default;
  }
`;

export const ComparisonIcon = styled(CompareIcon)`
  margin-right: 12px;
`;
