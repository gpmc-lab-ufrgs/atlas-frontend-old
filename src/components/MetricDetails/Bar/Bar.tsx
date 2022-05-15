import React from 'react';

import SolidBar from './SolidBar';
import * as Styles from './styles';

interface Props {
  rawValue: string;
  metric: {
    format: (value: string) => number;
  };
  id: number;
}

const Bar: React.FC<Props> = ({ rawValue, metric, id }) => {
  const value = metric.format(rawValue);
  const rawValueFloat = parseFloat(rawValue) || 0;

  return (
    <Styles.ProgressBar key={id} className="comparison-bar">
      <SolidBar label={value} value={rawValueFloat} max={100} width={115} />
    </Styles.ProgressBar>
  );
};

export default Bar;
