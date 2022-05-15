import React from "react";

import SolidBar from "./SolidBar";
import * as Styles from "./styles";

interface Props {
  rawValue: string;
  metric: {
    format: (value: string) => number;
  };
  key: number;
}

const Bar: React.FC<Props> = ({ rawValue, metric, key }) => {
  const value = metric.format(rawValue);
  var rawValueFloat = parseFloat(rawValue) || 0;

  return (
    <Styles.ProgressBar key={key} className="comparison-bar">
      <SolidBar label={value} value={rawValueFloat} max={100} width={115} />
    </Styles.ProgressBar>
  );
};

export default Bar;
