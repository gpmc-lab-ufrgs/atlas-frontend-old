import React from 'react';

import MetricDetails from '@components/MetricDetails';

import { useSelectedDistrict } from '@context/district/selectedContext';
import { useComparison } from '@context/comparisonContext';

import { MapPropsContentType } from '@customTypes/map';

import { Tooltip } from '@mui/material';

import * as Styles from './styles';

interface CollapsibleContentProps {
  props: MapPropsContentType;
}

export const CollapsibleContent: React.FC<CollapsibleContentProps> = ({ props }) => {
  const { selected } = useSelectedDistrict();
  const { comparison } = useComparison();

  const isSelectedOnComparison = comparison.some(
    (region) => region.properties.MUNICIPALITY_CODE === selected?.properties.MUNICIPALITY_CODE,
  );

  const hasSelectedDistrict = Boolean(selected);

  const { description, title } = props;

  return (
    <>
      <Tooltip title={description} arrow>
        <Styles.PropsTitle>{title}</Styles.PropsTitle>
      </Tooltip>
      {comparison.map((district) => (
        <Styles.ValueContent key={district.properties.MUNICIPALITY_CODE}>
          <p>{district.properties.MUNICIPALITY_NAME}</p>
          <MetricDetails district={district} metric={props} />
        </Styles.ValueContent>
      ))}

      {!isSelectedOnComparison && hasSelectedDistrict && (
        <Styles.ValueContent>
          <p>{selected?.properties.MUNICIPALITY_NAME}</p>
          <MetricDetails district={selected} metric={props} />
        </Styles.ValueContent>
      )}
    </>
  );
};
