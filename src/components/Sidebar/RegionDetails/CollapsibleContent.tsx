/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import MetricDetails from '@components/MetricDetails';

import { useSelectedDistrict } from '@context/district/selectedContext';
import { useSelectedState } from '@context/state/selectedContext';

import { useComparison } from '@context/comparisonContext';
import { useComparison as useComparisonState } from '@context/comparisonContextState';

import { MapPropsContentType } from '@customTypes/map';

import { Tooltip } from '@mui/material';

import * as Styles from './styles';
import { Estado } from 'src/interfaces/Estado.type';
import { Cidades } from 'src/interfaces/Cidades.type';

interface CollapsibleContentProps {
  propsEstado?: Estado;
  propsCidade?: Cidades;
}

export const CollapsibleContent = (props: CollapsibleContentProps) => {
  const dadosEstado = props.propsEstado;
  const dadosCidade = props.propsCidade;
  const isState = window.location.href.includes('/state');
  const isDistrict = window.location.href.includes('/district');
  const [nmTitulo, setNmTitulo] = useState<string>('');
  const [nmDescricao, setNmDescricao] = useState<string>('');
  const [nmLabel, setNmLabel] = useState<string>('');

  const { pathname } = location;
  const isEnglish = pathname.includes('/en');

  useEffect(() => {
    if(isState){
      if(dadosEstado){
        setNmTitulo(dadosEstado.nmEstado);
        setNmDescricao(isEnglish? dadosEstado.nmDescricaoEn : dadosEstado.nmDescricaoPt);
        setNmLabel(isEnglish ? dadosEstado.nmLabelEn : dadosEstado.nmLabelPt);
      }    
    } else /*if (!isState && isDistrict)*/{
      if(dadosCidade){
        setNmTitulo(dadosCidade.nmCidade);
        setNmDescricao(isEnglish? dadosCidade.nmDescricaoEn : dadosCidade.nmDescricaoPt);
        setNmLabel(isEnglish ? dadosCidade.nmLabelEn : dadosCidade.nmLabelPt);
      }    
    }
  }, [isState, isDistrict]);

  // let comparison, selected;

  // if (isState) {
  //   const { comparison: mainComparison } = useComparisonState();
  //   const { selected: selectedMain } = useSelectedState();

  //   comparison = mainComparison;
  //   selected = selectedMain;
  // } else {
  //   const { comparison: mainComparison } = useComparison();
  //   const { selected: selectedMain } = useSelectedDistrict();

  //   comparison = mainComparison;
  //   selected = selectedMain;
  // }

  // let isSelectedOnComparison;

  // if (isState) {
  //   isSelectedOnComparison = comparison.some((region) => region.properties.CD_UF === selected?.properties.CD_UF);
  // } else {
  //   isSelectedOnComparison = comparison.some((region) => region.properties.CD_MUN === selected?.properties.CD_MUN);
  // }

  // const hasSelectedState = isState ? Boolean(selected) : false;
  // const hasSelectedDistrict = !isState ? Boolean(selected) : false;

  return (
    <>
      <Tooltip title={`${nmDescricao}`} arrow>
        <Styles.PropsTitle>{`${nmLabel}`}</Styles.PropsTitle>
      </Tooltip>
      <Styles.ValueContent>
        <p>{nmTitulo}</p>
        <MetricDetails propsEstado={dadosEstado} propsCidade={dadosCidade} />
      </Styles.ValueContent>
      
      {/* {comparison.map((region) => (
        <Styles.ValueContent key={isState ? region.properties.CD_UF : region.properties.CD_MUN}>
          <p>{isState ? region.properties.NM_UF : region.properties.NM_MUN}</p>
          <MetricDetails region={region} metric={props} />
        </Styles.ValueContent>
      ))} */}

      {/* {(hasSelectedState || hasSelectedDistrict) && (
        <Styles.ValueContent>
          <p>{nmTitulo}</p>
          <MetricDetails propsEstado={dadosEstado} propsCidade={dadosCidade} />
        </Styles.ValueContent>
      )} */}
    </>
  );
};
