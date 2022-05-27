import { Box } from '@mui/material';
import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import LegendGradient from './LegendGradient';

import * as Styles from './styles';

export default function CloroplethLegend() {
  return (
    <Styles.Container>
      <LegendGradient />

      <Box paddingTop="25px" px="25px">
        <Styles.Title>População</Styles.Title>
      </Box>

      <Box sx={{ dispay: 'flex', alignItem: 'center' }}>
        <VictoryChart theme={VictoryTheme.material} height={200} horizontal>
          <VictoryBar barRatio={4} data={[{ x: 1, y: 10000 }]} style={{ data: { fill: 'url(#myGradient)' } }} />
          <VictoryAxis
            dependentAxis
            crossAxis
            style={{
              axis: { stroke: 'transparent' },
              ticks: { stroke: 'transparent' },
              tickLabels: { fill: 'black', fontSize: 16 },
            }}
            tickValues={[0, 5000, 10000]}
            domain={[0, 10000]}
            height={500}
            offsetY={75}
            offsetX={50}
          />
        </VictoryChart>
      </Box>
    </Styles.Container>
  );
}
