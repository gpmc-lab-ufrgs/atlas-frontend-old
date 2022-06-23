import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import extremePopulationValues from '@data/ExtremePopValuesByState.json';

import { useSelectedState } from '@store/state/selectedContext';

import { formatPopulationNumber } from '@utils/formatValue';

import * as Styles from './styles';

export default function CloroplethLegend() {
  const { selected: selectedState } = useSelectedState();
  const [extremeValues, setExtremeValues] = useState<[number, number]>([652716, 46649132]);

  useEffect(() => {
    if (!selectedState) setExtremeValues([652716, 46649132]);

    const sigleUF = selectedState?.properties?.SIGLA_UF;
    // @ts-ignore
    const extremePopulation = extremePopulationValues[sigleUF];

    if (extremePopulation) {
      const minValue = extremePopulation?.MIN_POPULATION_DISTRICT.POPULATION;
      const maxValue = extremePopulation?.MAX_POPULATION_DISTRICT.POPULATION;

      setExtremeValues([minValue, maxValue]);
    }
  }, [selectedState]);

  return (
    <Styles.Container>
      <Box p="25px">
        <Box>
          <Styles.Title>População</Styles.Title>
        </Box>

        <Styles.GradientBar />

        <Box display="flex" justifyContent="space-between">
          <Styles.Legend>{formatPopulationNumber(extremeValues[0])}</Styles.Legend>
          <Styles.Legend>{formatPopulationNumber(extremeValues[1])}</Styles.Legend>
        </Box>
      </Box>
    </Styles.Container>
  );
}
