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
import { Cidades } from 'src/interfaces/Cidades.type';
import { useAppDispatch, useAppSelector } from '@hook/hooks';
import { estadoSelected, changeEstado } from 'src/features/estadoSlice';
import { cidadeSelected, changeCidade } from 'src/features/cidadeSlice';

const RegionDetails = () => {
  const isStateSel = window.location.href.includes('/state');
  const isDistrictSel = window.location.href.includes('/district');
  //const isState = window.location.href.includes('/comparison_states') || window.location.href.includes('/state');
  const selectedEstado = useAppSelector(estadoSelected);
  const selectedCidade = useAppSelector(cidadeSelected);
  const [lstDadosEstado, setLstDadosEstado] = useState<Estado[]>([]);
  const [lstDadosCidade, setLstDadosCidade] = useState<Cidades[]>([]);
  const [lstDistinct, setLstDistinct] = useState<string[]>([]);
  const location = useLocation();
  const { pathname } = location;
  const isEnglish = pathname.includes('/en');

  useEffect(() => {
    if(isStateSel){
      setLstDadosEstado(selectedEstado);
      let t = isEnglish? selectedEstado.map(({ nmClassificacaoEn }) => nmClassificacaoEn) : selectedEstado.map(({ nmClassificacaoPt }) => nmClassificacaoPt);
      t = [... new Set(t)];
      setLstDistinct(t!);
    } else if(isDistrictSel){
      setLstDadosCidade(selectedCidade);
      let t = isEnglish? selectedEstado.map(({ nmClassificacaoEn }) => nmClassificacaoEn) : selectedEstado.map(({ nmClassificacaoPt }) => nmClassificacaoPt);
      t = [... new Set(t)];
      setLstDistinct(t!);
    }
  }, [selectedEstado, selectedCidade]);

  return (
    <Box>
      {
        lstDistinct
          .map((item, index) => (
            <DataSection
              key={`${item}`}
              title={`${item}`}
              propsEstado={isStateSel && lstDadosEstado? lstDadosEstado.filter((i) => (isEnglish? (i.nmClassificacaoEn == item) : (i.nmClassificacaoPt == item))) : undefined}
              propsCidade={isDistrictSel && lstDadosCidade? lstDadosCidade.filter((i) => (isEnglish? (i.nmClassificacaoEn == item) : (i.nmClassificacaoPt == item))) : undefined}
            />
          ))
      }
      {/*comparison.length > 0 && <ComparisonSection />*/}
      {/* {returnDataSection()} */}
    </Box>
  );
};

export default RegionDetails;
