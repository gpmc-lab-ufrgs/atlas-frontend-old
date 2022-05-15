import styled from 'styled-components';

export const ComparisonControlContainer = styled.div`
  width: 170px;

  display: flex;

  pointer-events: auto;

  svg {
    line-height: 0;
    margin-right: 4px;
  }
`;

interface ControlProps {
  isControlType: boolean;
}

export const Control = styled.label<ControlProps>`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  border-color: #999999;
  border-style: solid;
  border-width: 1px 1px 1px 0px;

  cursor: pointer;

  font-size: 14px;
  line-height: 34px;

  color: ${({ isControlType }) => (isControlType ? '#ffffff' : '#333')};
  background-color: ${({ isControlType }) => (isControlType ? '#666666' : 'white')};

  :last-child {
    border-radius: 0 5px 5px 0;
  }

  :first-child {
    border-radius: 5px 0 0 5px;
    border-left: 1px solid #999999;
  }

  input[type='radio'] {
    position: absolute;

    width: 0;
    height: 0;

    margin: 0;
    padding: 0;

    opacity: 0;
    box-sizing: border-box;
  }
`;
