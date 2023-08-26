import React from 'react';

import { useComparison } from '@context/comparisonContext';
import { useComparison as useComparisonState } from '@context/comparisonContextState';

import GridMode from './GridMode';
import TableMode from './TableMode';

import * as Styles from './styles';

interface Props {
  comparisonType: string;
}

const ComparisonMode: React.FC<Props> = ({ comparisonType }) => {

  let comparison;

  const isState = window.location.href.includes('/comparison_states') || window.location.href.includes('/comparison_states_en');

  if (isState) {
    ({ comparison } = useComparisonState());
  } else {
    ({ comparison } = useComparison());
  }

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
