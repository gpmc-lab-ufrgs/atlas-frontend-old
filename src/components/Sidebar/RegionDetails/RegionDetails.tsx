/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import { useComparison } from '@context/comparisonContext';
import { useComparison as useComparisonState } from '@context/comparisonContextState';

import ComparisonSection from './ComparisonSection';
import DataSection from './DataSection';
import { useLocation } from 'react-router-dom';
import { Estado } from 'src/interfaces/Estado.type';
import { useAppDispatch, useAppSelector } from '@hook/hooks';
import { estadoSelected, changeEstado } from 'src/features/estadoSlice';

const RegionDetails = () => {
  const isState = window.location.href.includes('/comparison_states') || window.location.href.includes('/state');
  const selectedEstado = useAppSelector(estadoSelected);
  const [lstDadosEstado, setLstDadosEstado] = useState<Estado[]>([]);
  const [lstDistinct, setLstDistinct] = useState<string[]>([]);

  let comparison;

  if (isState) {
    const { comparison: mainComparison } = useComparisonState();
    comparison = mainComparison;
  } else {
    const { comparison: mainComparison } = useComparison();
    comparison = mainComparison;
  }

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLstDadosEstado(selectedEstado);
    let t = isEnglish? selectedEstado.map(({ nmClassificacaoEn }) => nmClassificacaoEn) : selectedEstado.map(({ nmClassificacaoPt }) => nmClassificacaoPt);
    t = [... new Set(t)];
    setLstDistinct(t!);


    // const t = selectedEstado.map(({ nmClassificacaoPt, nmClassificacaoEn }) => isEnglish? nmClassificacaoEn : nmClassificacaoPt);
    
    // setLstDistinct([... new Set(t)]);
  }, [selectedEstado]);

  const location = useLocation();
  const { pathname } = location;
  const isEnglish = pathname.includes('/en');

  return (
    <Box>
      {
        lstDistinct
          .map((item, index) => (
            <DataSection
              key={`${item}`}
              title={`${item}`}
              props={lstDadosEstado.filter((i) => (isEnglish? (i.nmClassificacaoEn == item) : (i.nmClassificacaoPt == item)))}
            />
          ))
      }
      {/*comparison.length > 0 && <ComparisonSection />*/}
      {/* {returnDataSection()} */}
    </Box>
  );
};

export default RegionDetails;
