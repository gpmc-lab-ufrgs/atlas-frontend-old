import styled from 'styled-components';

interface Props {
  selectedDistrict: boolean;
}

export const SearchBarContainer = styled.div`
  z-index: 5;

  pointer-events: auto;

  width: 305px;

  top: 0;
`;

export const SearchBarField = styled.div<Props>`
  height: 40px;

  display: flex;
  align-items: stretch;

  background: white;

  border-radius: 5px;

  pointer-events: auto;

  input {
    width: 100%;
    flex-grow: 1;

    margin: 0;
    padding: 2px 0px 0px 15px;

    border: none;
    outline: none;

    background: transparent;

    font-size: ${({ selectedDistrict }) => (selectedDistrict ? '18' : '15')}px !important;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  padding-right: 10px;
  border: none;

  cursor: pointer;

  color: #999999;
`;
