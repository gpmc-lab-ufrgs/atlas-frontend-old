import React from 'react';

import MetricDetails from '@components/MetricDetails';

import { useSelectedDistrict } from '@context/district/selectedContext';
import { useSelectedState } from '@context/state/selectedContext';

import { useComparison } from '@context/comparisonContext';
import { useComparison as useComparisonState } from '@context/comparisonContextState';

import { MapPropsContentType } from '@customTypes/map';

import { Tooltip } from '@mui/material';

import * as Styles from './styles';

interface CollapsibleContentProps {
  props: MapPropsContentType;
}

export const CollapsibleContent: React.FC<CollapsibleContentProps> = ({ props }) => {
  const isState = window.location.href.includes('/state');
  const isDistrict = window.location.href.includes('/district');

  let comparison, selected;

  if (isState) {
    const { comparison: mainComparison } = useComparisonState();
    const { selected: selectedMain } = useSelectedState();

    comparison = mainComparison;
    selected = selectedMain;
  } else {
    const { comparison: mainComparison } = useComparison();
    const { selected: selectedMain } = useSelectedDistrict();

    comparison = mainComparison;
    selected = selectedMain;
  }

  let isSelectedOnComparison;

  if (isState) {
    isSelectedOnComparison = comparison.some((region) => region.properties.CD_MUN === selected?.properties.CD_UF);
  }else{
      isSelectedOnComparison = comparison.some((region) => region.properties.CD_MUN === selected?.properties.CD_MUN);
  }

  const hasSelectedState = isState ? Boolean(selected) : false;
  const hasSelectedDistrict = !isState ? Boolean(selected) : false;


  const { description, title } = props;

  return (
    <>
      <Tooltip title={description} arrow>
        <Styles.PropsTitle>{title}</Styles.PropsTitle>
      </Tooltip>
      {comparison.map((region) => (
        <Styles.ValueContent key={isState ? district.properties.CD_UF : district.properties.CD_MUN}>
          <p>{isState ? region.properties.NM_UF : region.properties.NM_MUN}</p>
          <MetricDetails region={region} metric={props} />
        </Styles.ValueContent>
      ))}

      {!isSelectedOnComparison && (hasSelectedState || hasSelectedDistrict) && (
        <Styles.ValueContent>
          <p>{isState ? selected?.properties.NM_UF : selected?.properties.NM_MUN}</p>
          <MetricDetails region={selected} metric={props} />
        </Styles.ValueContent>
      )}
      )}
    </>
  );
};
