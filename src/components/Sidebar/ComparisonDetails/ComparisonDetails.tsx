import { useNavigate } from 'react-router';
import { Box } from '@mui/material';
import Collapsible from '@components/Collapsible';
import { useComparison } from '@context/comparisonContext';
import useMap from '@hook/useMap';
import * as Styles from './styles';
import './styles.css';

const ComparisonDetails = () => {
  const { comparison, removeComparisonDistrict, removeAllComparisons } = useComparison();
  const { resetMapValues } = useMap();
  const navigate = useNavigate();

  const isEnglish = window.location.href.includes('/comparison_en');

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
                {feature.properties.NM_MUN}
                <Styles.CloseButton onClick={() => removeComparisonDistrict(feature)} />
              </Styles.ComparisonList>
            ))}
          </>
        </Collapsible>
      )}
    </Box>
  );
};

export default ComparisonDetails;
