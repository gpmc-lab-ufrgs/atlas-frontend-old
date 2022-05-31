import { Box } from '@mui/material';
import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import LegendGradient from './LegendGradient';

import * as Styles from './styles';

interface CloroplethLegendProps {
  legendTick: number[];
}

export default function CloroplethLegend({ legendTick }: CloroplethLegendProps) {
  return (
    <Styles.Container>
      <LegendGradient />

      <Box paddingTop="25px" px="25px">
        <Styles.Title>População</Styles.Title>
      </Box>

      <Box sx={{ dispay: 'flex', alignItem: 'center' }}>
        <VictoryChart theme={VictoryTheme.material} height={200} horizontal>
          <VictoryBar
            barRatio={4}
            data={[{ x: 1, y: legendTick[1], y0: legendTick[0] }]}
            style={{ data: { fill: 'url(#myGradient)' } }}
          />
          <VictoryAxis
            dependentAxis
            crossAxis
            style={{
              axis: { stroke: 'transparent' },
              ticks: { stroke: 'transparent' },
              tickLabels: { fill: 'black', fontSize: 16 },
            }}
            tickValues={legendTick}
            domain={legendTick}
            height={500}
            offsetY={75}
            offsetX={50}
          />
        </VictoryChart>
      </Box>
    </Styles.Container>
  );
}
