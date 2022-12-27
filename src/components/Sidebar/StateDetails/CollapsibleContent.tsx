import React from 'react';

import { MapPropsContentType } from '@customTypes/map';

import { Tooltip } from '@mui/material';

import MetricStateDetails from '@components/MetricDetails/MetricStateDetails';
import { useSelectedState } from '@context/state/selectedContext';
import * as Styles from './styles';

interface CollapsibleContentProps {
  props: MapPropsContentType;
}

export const CollapsibleContent: React.FC<CollapsibleContentProps> = ({ props }) => {
  const { selected } = useSelectedState();
  //const { comparison } = useComparison();

  //const isSelectedOnComparison = comparison.some((region) => region.properties.CD_UF === selected?.properties.CD_UF);

  const hasSelectedState = Boolean(selected);

  const { description, title } = props;

  return (
    <>
      <Tooltip title={description} arrow>
        <Styles.PropsTitle>{title}</Styles.PropsTitle>
      </Tooltip>
      {/* Caso não seja necessário a comparação entre os Estados, apague estes
      comentários */}
      {/* {comparison.map((state) => (
        <Styles.ValueContent key={state.properties.CD_UF}>
          <p>{state.properties.FU_NAME}</p>
          <MetricDetails district={state} metric={props} />
        </Styles.ValueContent>
      ))} */}

      {/* {!isSelectedOnComparison && hasSelectedState && (
        <Styles.ValueContent>
          <p>{selected?.properties.FU_NAME}</p>
          <MetricDetails district={selected} metric={props} />
        </Styles.ValueContent>
      )} */}

      {hasSelectedState && (
        <Styles.ValueContent>
          <p>{selected?.properties.NM_UF}</p>
          <MetricStateDetails state={selected} metric={props} />
        </Styles.ValueContent>
      )}
    </>
  );
};
