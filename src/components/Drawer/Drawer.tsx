import React from "react";

import * as Styles from "./styles";

type Anchor = "right" | "left";

interface Props {
  open: boolean;
  setOpen: (bool: boolean) => void;
  anchor: Anchor;
  hideBackdrop?: boolean;
}

const Drawer: React.FC<Props> = ({
  open,
  anchor,
  setOpen,
  hideBackdrop,
  children,
}) => {
  const handleCloseDrawer = () => setOpen(false);

  return (
    <Styles.Drawer
      anchor={anchor}
      open={open}
      onClose={() => handleCloseDrawer()}
      hideBackdrop={hideBackdrop}
      disableEnforceFocus
    >
      <Styles.DrawerContent>{children}</Styles.DrawerContent>
    </Styles.Drawer>
  );
};

export default Drawer;
