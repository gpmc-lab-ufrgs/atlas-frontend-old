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
  return (
    <Styles.Drawer
      anchor={anchor}
      open={open}
      onClose={() => setOpen(false)}
      hideBackdrop={hideBackdrop}
    >
      <Styles.DrawerContent>{children}</Styles.DrawerContent>
    </Styles.Drawer>
  );
};

export default Drawer;
