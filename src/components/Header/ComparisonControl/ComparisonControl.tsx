import React from 'react';

import { Window, TableChart } from '@mui/icons-material';

import * as Styles from './styles';

interface Props {
  comparisonType: string;
  setComparison(value: string): void;
}

const ComparisonControl: React.FC<Props> = ({
  comparisonType,
  setComparison,
}) => {
  const controls = [
    { label: 'Table', value: 'table', icon: <TableChart /> },
    { label: 'Grid', value: 'grid', icon: <Window /> },
  ];

  return (
    <Styles.ComparisonControlContainer>
      {controls.map(({ value, icon, label }, id) => (
        <Styles.Control isControlType={value === comparisonType} key={id}>
          <input
            type="radio"
            value={value}
            checked={value === comparisonType}
            onChange={(ev) => setComparison(ev?.target?.value)}
          />

          {icon}
          {label}
        </Styles.Control>
      ))}
    </Styles.ComparisonControlContainer>
  );
};

export default ComparisonControl;
