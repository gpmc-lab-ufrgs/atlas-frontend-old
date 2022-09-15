import React from 'react';

import { useComparison } from '@context/comparisonContext';

import GridMode from './GridMode';
import TableMode from './TableMode';

import * as Styles from './styles';

interface Props {
  comparisonType: string;
}

const ComparisonMode: React.FC<Props> = ({ comparisonType }) => {
  const { comparison } = useComparison();

  function comparisonModeToggle() {
    switch (comparisonType) {
      case 'table':
        return <TableMode comparison={comparison} />;
      case 'grid':
        return <GridMode comparison={comparison} />;
      default:
        return <>Erro ao carregar dados</>;
    }
  }

  return <Styles.ComparisonWrapper>{comparisonModeToggle()}</Styles.ComparisonWrapper>;
};

export default ComparisonMode;
