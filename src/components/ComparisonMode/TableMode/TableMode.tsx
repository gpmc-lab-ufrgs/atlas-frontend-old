import React from 'react';

import { Box } from '@mui/material';

import districtProps from '@config/district';
import { State } from '@customTypes/state';
import { District } from '@customTypes/district';

import Header from './Header';
import TableContent from './TableContent';

import * as Styles from './styles';

let comparison;
const isState = window.location.href.includes('/comparison_states');

if (isState) {
  interface Props {
    comparison: Array<State>;
  }
} else {
  interface Props {
    comparison: Array<District>;
  }
}

const TableMode: React.FC<Props> = ({ comparison }) => {
  return (
    <Styles.TablerContainer>
      <Header comparison={comparison} />
      <Box>
        {districtProps.map((section, id) => (
          <TableContent section={section} comparison={comparison} key={id} />
        ))}
      </Box>
    </Styles.TablerContainer>
  );
};

export default TableMode;
