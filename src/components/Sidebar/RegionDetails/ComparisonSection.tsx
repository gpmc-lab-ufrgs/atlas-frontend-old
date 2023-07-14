import Collapsible from '@components/Collapsible';
import { useComparison } from '@context/comparisonContext';
import * as Styles from './styles';
import { useLocation } from 'react-router-dom';

const ComparisonSection = () => {
  const { comparison, removeComparisonDistrict } = useComparison();

  const comparisonRegionIds = comparison.map((feature: any) => feature.properties.CD_MUN);

  const location = useLocation();
  const { pathname } = location;
  const isEnglish = pathname.includes('/en');

  const ComparisonResult = () => (
    <Styles.ComparisonButton to={isEnglish ? '/comparison_en/' + comparisonRegionIds.join('+') : '/comparison/'}>
      <p>{isEnglish ? 'Show Comparison' : 'Mostrar comparação'}</p>
      <Styles.ChevronIcon />
    </Styles.ComparisonButton>
  );

  return (
    <Collapsible title={isEnglish ? 'Comparison' : 'Comparação'}>
      {comparison.map((feature: any) => (
        <Styles.ComparisonList key={feature.properties.CD_MUN}>
          {feature.properties['NM_MUN']}
          <Styles.CloseIcon onClick={() => removeComparisonDistrict(feature)} />
        </Styles.ComparisonList>
      ))}

      {comparison.length > 0 && ComparisonResult()}
      <Styles.DisclaimerText>{isEnglish ? 'Add up to 4 regions' : 'Adicione até 4 regiões'}</Styles.DisclaimerText>
    </Collapsible>
  );
};

export default ComparisonSection;
