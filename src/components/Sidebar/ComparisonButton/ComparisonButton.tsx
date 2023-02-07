import { Box } from '@mui/material';

import { useComparison } from '@context/comparisonContext';
import { useSelectedDistrict } from '@context/district/selectedContext';

import { District } from '@customTypes/district';

import { ReactComponent as CompareIcon } from '../../../assets/utils/compare.svg';

import * as Styles from './styles';

const ComparisonButton = () => {
  const { selectedDistrict } = useSelectedDistrict();
  const { comparison, addComparisonDistrict, removeComparisonDistrict } = useComparison();

  const isButtonOn = comparison.length >= 4;
  const isSelectedOnComparison = comparison.some(
    (region) => region.properties.CD_MUN === selectedDistrict?.properties.CD_MUN,
  );

  const comparisonClick = (feature: District | null) => {
    if (isSelectedOnComparison) {
      removeComparisonDistrict(feature);
    } else {
      addComparisonDistrict([feature]);
    }
  };

  return (
    <Styles.ComparisonButton>
      <Styles.ButtonWrapper
        disabled={!isSelectedOnComparison && isButtonOn}
        onClick={() => comparisonClick(selectedDistrict)}
      >
        <Box mr="12px">
          <CompareIcon />
        </Box>
        {isSelectedOnComparison ? 'Remover da comparação' : 'Adicionar a comparação'}
      </Styles.ButtonWrapper>
    </Styles.ComparisonButton>
  );
};

export default ComparisonButton;
