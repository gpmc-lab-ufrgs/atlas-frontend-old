import React from "react";

import { Box } from "@mui/material";

import districtProps from "@config/districtProps";
import { Feature } from "@types/Feature";

import Header from "./Header";
import TableContent from "./TableContent";

import * as Styles from "./styles";

interface Props {
  comparison: Array<Feature>;
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
