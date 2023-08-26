import { useNavigate } from 'react-router';
import { Box } from '@mui/material';
import Collapsible from '@components/Collapsible';
import { useComparison } from '@context/comparisonContext';
import { useComparison as useComparisonState } from '@context/comparisonContextState';
import useMap from '@hook/useMap';
import * as Styles from './styles';
import './styles.css';

const ComparisonDetails = () => {
  const isEnglish = window.location.href.includes('/comparison_en') || window.location.href.includes('/comparison_states_en');
  const isState = window.location.href.includes('/comparison_states');

  let comparison, removeComparisonDistrict, removeComparisonState, removeAllComparisons;

  if (isState) {
    const { comparison: mainComparison, removeComparisonState: mainComparison3, removeAllComparisons: mainComparison4 } = useComparisonState();
    comparison = mainComparison;
    removeComparisonState = mainComparison3;
    removeAllComparisons = mainComparison4;
  } else {
    const { comparison: mainComparison, removeComparisonDistrict: mainComparison3, removeAllComparisons: mainComparison4 } = useComparison();
    comparison = mainComparison;
    removeComparisonDistrict = mainComparison3;
    removeAllComparisons = mainComparison4;
  }

  const { resetMapValues } = useMap();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (isEnglish) {
      navigate('/en');
    } else {
      navigate('');
    }
    resetMapValues();
    removeAllComparisons(); // Clear the comparison array
  };

  const Title = () => (
    <Styles.TitleWrapper>
      <Styles.ArrowBackButton style={{ color: 'white' }} onClick={handleGoBack} />
      <Styles.Title style={{ color: 'white' }}>
       {isEnglish ? 'Comparing Regions' : 'Comparando Regiões'}
      </Styles.Title>
    </Styles.TitleWrapper>
  );

  return (
    <Box>
      <Title />
      {comparison.length > 0 && (
        <Collapsible title= {isEnglish ? 'Comparison' : 'Comparação'}>
          <>
            {comparison.map((feature: any, id) => (
              <Styles.ComparisonList key={id}>
                {isState ? feature.properties.NM_UF : feature.properties.NM_MUN}
                {/*{isState ? (
                  <Styles.CloseButton onClick={() => removeComparisonState(feature)} />
                ) : (
                  <Styles.CloseButton onClick={() => removeComparisonDistrict(feature)} />
                )}*/}
              </Styles.ComparisonList>
            ))}
          </>
        </Collapsible>
      )}
    </Box>
  );
};

export default ComparisonDetails;
