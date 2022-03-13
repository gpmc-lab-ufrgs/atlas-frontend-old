import { Box } from "@mui/material";

import { useComparison } from "@store/index";
import countyProps from "@config/countyProps";

import Header from "./Header";
import TableContent from "./TableContent";

import * as Styles from "./styles";

const TableMode = () => {
  const { comparison } = useComparison();

  return (
    <Styles.TablerContainer>
      <Header comparison={comparison} />
      <Box>
        {countyProps.map((section, id) => (
          <TableContent section={section} comparison={comparison} key={id} />
        ))}
      </Box>
    </Styles.TablerContainer>
  );
};

export default TableMode;
