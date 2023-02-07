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
  const { selectedDistrict } = useSelectedDistrict();
  const { comparison } = useComparison();

  const isSelectedOnComparison = comparison.some(
    (region) => region.properties.CD_MUN === selectedDistrict?.properties.CD_MUN,
  );

  const hasSelectedDistrict = Boolean(selectedDistrict);

  const { description, title } = props;

  return (
    <>
      <Tooltip title={description} arrow>
        <Styles.PropsTitle>{title}</Styles.PropsTitle>
      </Tooltip>
      {comparison.map((district) => (
        <Styles.ValueContent key={district.properties.CD_MUN}>
          <p>{district.properties.NM_MUN}</p>
          <MetricDetails district={district} metric={props} />
        </Styles.ValueContent>
      ))}

      {!isSelectedOnComparison && hasSelectedDistrict && (
        <Styles.ValueContent>
          <p>{selectedDistrict?.properties.NM_MUN}</p>
          <MetricDetails district={selectedDistrict} metric={props} />
        </Styles.ValueContent>
      )}
    </>
  );
};
