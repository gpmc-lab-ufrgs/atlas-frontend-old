import { Box } from '@mui/material';

import { useComparison } from '@context/comparisonContext';
import { useComparison as useComparisonState } from '@context/comparisonContextState';

import { useSelectedDistrict } from '@context/district/selectedContext';
import { useSelectedState } from '@context/state/selectedContext';

import { District } from '@customTypes/district';
import { State } from '@customTypes/district';

import { ReactComponent as CompareIcon } from '../../../assets/utils/compare.svg';
import * as Styles from './styles';
import { useLocation } from 'react-router-dom';

const ComparisonButton = () => {
  const isState = window.location.href.includes('/state');
  const isDistrict = window.location.href.includes('/district');

  let comparison, selected, addComparisonDistrict, removeComparisonDistrict, addComparisonState, removeComparisonState;

  if (isState) {
    const { comparison: mainComparison, addComparisonState: mainComparison2, removeComparisonState: mainComparison3 } = useComparisonState();
    const { selected: selectedMain } = useSelectedState();

    comparison = mainComparison;
    addComparisonState = mainComparison2;
    removeComparisonState = mainComparison3;
    selected = selectedMain;
  } else {

    const { comparison: mainComparison, addComparisonDistrict: mainComparison2, removeComparisonDistrict: mainComparison3 } = useComparison();
    const { selected: selectedMain } = useSelectedDistrict();

    comparison = mainComparison;
    addComparisonDistrict = mainComparison2;
    removeComparisonDistrict = mainComparison3;
    selected = selectedMain;
  }

  const isButtonOn = comparison.length >= 4;

  let isSelectedOnComparison;

  if (isState) {
    isSelectedOnComparison = comparison.some((region) => region.properties.CD_UF === selected?.properties.CD_UF);
  }else{
    isSelectedOnComparison = comparison.some((region) => region.properties.CD_MUN === selected?.properties.CD_MUN);
  }

  const comparisonClick = (feature: District | null) => {

    if (isState){
      if (isSelectedOnComparison) {
        removeComparisonState(feature);
      } else {
        addComparisonState([feature]);
      }
    }else{
      if (isSelectedOnComparison) {
        removeComparisonDistrict(feature);
      } else {
        addComparisonDistrict([feature]);
      }
    }

  };

  const location = useLocation();
  const { pathname } = location;
  const isEnglish = pathname.includes('/en');

  return (
    <Styles.ComparisonButton>
      <Styles.ButtonWrapper disabled={!isSelectedOnComparison && isButtonOn} onClick={() => comparisonClick(selected)}>
        <Box mr="12px">
          <CompareIcon />
        </Box>
        {isSelectedOnComparison
          ? isEnglish
            ? 'Remove from comparison'
            : 'Remover da comparação'
          : isEnglish
          ? 'Add to comparison'
          : 'Adicionar a comparação'}
      </Styles.ButtonWrapper>
    </Styles.ComparisonButton>
  );
};

export default ComparisonButton;
