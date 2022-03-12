import { useEffect, useState } from "react";

import { useComparison, useSidebar } from "@store/index";

import { GridView, TableView } from "./components";

import * as Styles from "./styles";

const ComparisonMode = () => {
  const { sidebarIsOpen } = useSidebar();
  const { comparisonType } = useComparison();
  const [contentWidth, setContentWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      if (!sidebarIsOpen) {
        setContentWidth(window.innerWidth);
      } else {
        setContentWidth(window.innerWidth - 340);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);
  }, [sidebarIsOpen]);

  return (
    <Styles.ComparisonWrapper>
      {comparisonType === "table" && <TableView width={contentWidth} />}
      {comparisonType === "grid" && <GridView />}
    </Styles.ComparisonWrapper>
  );
};

export default ComparisonMode;
