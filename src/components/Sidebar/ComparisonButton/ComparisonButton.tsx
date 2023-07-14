import { Box } from '@mui/material';
import { useComparison } from '@context/comparisonContext';
import { useSelectedDistrict } from '@context/district/selectedContext';
import { District } from '@customTypes/district';
import { ReactComponent as CompareIcon } from '../../../assets/utils/compare.svg';
import * as Styles from './styles';
import { useLocation } from 'react-router-dom';

const ComparisonButton = () => {
  const { selected } = useSelectedDistrict();
  const { comparison, addComparisonDistrict, removeComparisonDistrict } = useComparison();

  const isButtonOn = comparison.length >= 4;
  const isSelectedOnComparison = comparison.some((region) => region.properties.CD_MUN === selected?.properties.CD_MUN);

  const comparisonClick = (feature: District | null) => {
    if (isSelectedOnComparison) {
      removeComparisonDistrict(feature);
    } else {
      addComparisonDistrict([feature]);
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
