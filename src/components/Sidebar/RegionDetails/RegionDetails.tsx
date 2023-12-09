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
    const t = selectedEstado.map(({ nmClassificacaoPt, nmClassificacaoEn }) => nmClassificacaoPt);
    setLstDistinct([... new Set(t)]);
  }, [selectedEstado]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let response;
  //     if (isState) {
  //       response = await fetch('http://3.92.188.34:8001/dictionary/dictionary_state/json/');
  //     } else {
  //       response = await fetch('http://3.92.188.34:8001/dictionary/dictionary/json/');
  //     }
  //     const json = await response.json();
  //     setData(json);
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  const location = useLocation();
  const { pathname } = location;
  const isEnglish = pathname.includes('/en');

  const returnDataSection = () => {
    if(lstDadosEstado.length > 0){
      const distinctClass = lstDadosEstado.map(({ nmClassificacaoPt, nmClassificacaoEn }) => (isEnglish? nmClassificacaoEn : nmClassificacaoPt));
      if(distinctClass.length > 0){
        distinctClass.map((item) => {
          const valoresPorClassificacao: Estado[] = lstDadosEstado.filter((i) => (isEnglish? (i.nmClassificacaoEn == item) : (i.nmClassificacaoPt == item)));
          return (
            <DataSection
              key={`${item}`}
              title={`${item}`}
              props={valoresPorClassificacao}
            />
          );
        });
      } else {
        return (
          <></>
        );
      }
    } else {
      return (
        <></>
      );
    }
  };

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
