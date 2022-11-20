import React from 'react';
import { Link } from 'react-router-dom';

import Collapsible from '@components/Collapsible';

import { useComparison } from '@store/comparisonContext';

import * as Styles from './styles';

const ComparisonSection = () => {
  const { comparison, removeComparisonDistrict } = useComparison();

  const comparisonRegionIds = comparison.map((feature: any) => feature.properties.CD_MUN);

  const ComparisonResult = () => (
    <Styles.ComparisonButton to={'/comparison/' + comparisonRegionIds.join('+')}>
      <p>Mostrar comparação</p>
      <Styles.ChevronIcon />
    </Styles.ComparisonButton>
  );

  return (
    <Collapsible title="Comparação">
      {comparison.map((feature: any) => (
        <Styles.ComparisonList key={feature.properties.CD_MUN}>
          {feature.properties['NM_MUN']}
          <Styles.CloseIcon onClick={() => removeComparisonDistrict(feature)} />
        </Styles.ComparisonList>
      ))}

      {comparison.length > 0 && ComparisonResult()}
      <Styles.DisclaimerText>Adicione até 4 regiões</Styles.DisclaimerText>
    </Collapsible>
  );
};

export default ComparisonSection;
