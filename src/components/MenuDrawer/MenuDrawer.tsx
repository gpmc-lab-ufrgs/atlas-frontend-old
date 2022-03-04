import React from "react";

import * as Styles from "./styles";

type Anchor = "right" | "left";

interface Props {
  open: boolean;
  setOpen: (bool: boolean) => void;
  anchor: Anchor;
  hideBackdrop?: boolean;
}

const MenuDrawer: React.FC<Props> = ({
  open,
  setOpen,
  anchor,
  children,
  hideBackdrop,
}) => {
  return (
    <Styles.MenuDrawer
      anchor={anchor}
      open={open}
      onClose={() => setOpen(false)}
      hideBackdrop={hideBackdrop}
    >
      <Styles.MenuContent>{children}</Styles.MenuContent>
    </Styles.MenuDrawer>
  );
};

export default MenuDrawer;
