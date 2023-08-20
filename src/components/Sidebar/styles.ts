import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ComparisonButton = styled(Link)`
  display: flex;
  align-items: center;
  align-self: center;

  margin-top: 20px;
  padding: 5px 15px;

  background-color: rgba(0, 64, 111, 0.9);

  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #fff;

  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 100px;

  cursor: pointer;

  p {
    margin: 0;
  }
`;


export const SidebarContent = styled.div`
  width: 305px;
`;

export const Title = styled.h2`
  margin-top: 10px;
  color: white;
`;

export const EmptyContent = styled.div`
  height: calc(100vh - 100px);

  display: flex;
  align-items: center;

  padding: 0px 10px;
`;
