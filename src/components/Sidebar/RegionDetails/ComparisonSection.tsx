import Collapsible from '@components/Collapsible';

import { useComparison } from '@context/comparisonContext';

import * as Styles from './styles';

const ComparisonSection = () => {
  const { comparison, removeComparisonDistrict } = useComparison();

  const comparisonRegionIds = comparison.map((feature: any) => feature.properties.MUNICIPALITY_CODE);

  const ComparisonResult = () => (
    <Styles.ComparisonButton to={'/comparison/' + comparisonRegionIds.join('+')}>
      <p>Mostrar comparação</p>
      <Styles.ChevronIcon />
    </Styles.ComparisonButton>
  );

  return (
    <Collapsible title="Comparação">
      {comparison.map((feature: any) => (
        <Styles.ComparisonList key={feature.properties.MUNICIPALITY_CODE}>
          {feature.properties['MUNICIPALITY_NAME']}
          <Styles.CloseIcon onClick={() => removeComparisonDistrict(feature)} />
        </Styles.ComparisonList>
      ))}

      {comparison.length > 0 && ComparisonResult()}
      <Styles.DisclaimerText>Adicione até 4 regiões</Styles.DisclaimerText>
    </Collapsible>
  );
};

export default ComparisonSection;
