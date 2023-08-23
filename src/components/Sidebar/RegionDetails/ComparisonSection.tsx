import Collapsible from '@components/Collapsible';

import { useComparison } from '@context/comparisonContext';
import { useComparison as useComparisonState } from '@context/comparisonContextState';

import * as Styles from './styles';
import { useLocation } from 'react-router-dom';

const ComparisonSection = () => {
  const isState = window.location.href.includes('/state');
  const isDistrict = window.location.href.includes('/district');

  let comparison, removeComparisonDistrict, removeComparisonState;

  if (isState) {
    const { comparison: mainComparison, removeComparisonState: mainComparison3 } = useComparisonState();
    comparison = mainComparison;
    removeComparisonState = mainComparison3;
  } else {
    const { comparison: mainComparison, removeComparisonDistrict: mainComparison3 } = useComparison();
    comparison = mainComparison;
    removeComparisonDistrict = mainComparison3;
  }

  let comparisonRegionIds;

  if (isState) {
    comparisonRegionIds = comparison.map((feature: any) => feature.properties.CD_UF);
  }else{
    comparisonRegionIds = comparison.map((feature: any) => feature.properties.CD_MUN);
  }


  const location = useLocation();
  const { pathname } = location;
  const isEnglish = pathname.includes('/en');

  const ComparisonResult = () => (
  <div>
    {isEnglish && isState ? (
      <Styles.ComparisonButton to={'/comparison_states_en/' + comparisonRegionIds.join('+')}>
        <p>{isEnglish ? 'Show Comparison' : 'Mostrar comparação'}</p>
        <Styles.ChevronIcon />
      </Styles.ComparisonButton>
    ) : isState ? (
      <Styles.ComparisonButton to={'/comparison_states/' + comparisonRegionIds.join('+')}>
        <p>{isEnglish ? 'Show Comparison' : 'Mostrar comparação'}</p>
        <Styles.ChevronIcon />
      </Styles.ComparisonButton>
    ) : isEnglish ? (
      <Styles.ComparisonButton to={'/comparison_en/' + comparisonRegionIds.join('+')}>
        <p>{isEnglish ? 'Show Comparison' : 'Mostrar comparação'}</p>
        <Styles.ChevronIcon />
      </Styles.ComparisonButton>
    ) : (
      <Styles.ComparisonButton to={'/comparison/' + comparisonRegionIds.join('+')}>
        <p>{isEnglish ? 'Show Comparison' : 'Mostrar comparação'}</p>
        <Styles.ChevronIcon />
      </Styles.ComparisonButton>
    )}
  </div>
);

  return (
    <Collapsible title={isEnglish ? 'Comparison' : 'Comparação'}>
      {comparison.map((feature: any) => (
        <Styles.ComparisonList key={isState ? feature.properties.CD_UF : feature.properties.CD_MUN}>
          {isState ? feature.properties['NM_UF'] : feature.properties['NM_MUN']}
          {isState ? (
            <Styles.CloseIcon onClick={() => removeComparisonState(feature)} />
          ) : (
            <Styles.CloseIcon onClick={() => removeComparisonDistrict(feature)} />
          )}
        </Styles.ComparisonList>
      ))}

      {comparison.length > 0 && ComparisonResult()}
      <Styles.DisclaimerText>{isEnglish ? 'Add up to 4 regions' : 'Adicione até 4 regiões'}</Styles.DisclaimerText>
    </Collapsible>
  );
};

export default ComparisonSection;
