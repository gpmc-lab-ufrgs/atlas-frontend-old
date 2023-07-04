import React from 'react';

import * as Styles from './styles';

import centeredImageLogo from './centeredImageLogo.png';

type Anchor = 'right' | 'left';

interface Props {
  open: boolean;
  setOpen: (bool: boolean) => void;
  anchor: Anchor;
  hideBackdrop?: boolean;
  children: React.ReactNode;
}

const Drawer: React.FC<Props> = ({ open, anchor, setOpen, hideBackdrop, children }) => {
  const handleCloseDrawer = () => setOpen(false);

  return (
  <Styles.Drawer
    anchor={anchor}
    open={open}
    onClose={() => handleCloseDrawer()}
    hideBackdrop={hideBackdrop}
    disableEnforceFocus
  >
    <Styles.DrawerContent>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={centeredImageLogo} alt="Centered Image" />
      </div>
      {children}
    </Styles.DrawerContent>
  </Styles.Drawer>
);
};

export default Drawer;
