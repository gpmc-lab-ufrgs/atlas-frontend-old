import React, { useState, createContext,  useContext } from "react";

type HamburgerMenuContext = {  
  hamburgerMenuIsOpen: boolean, 
  setHamburgerMenuIsOpen: React.Dispatch<React.SetStateAction<any>>
}

const DEFAULT_VALUE = {
  hamburgerMenuIsOpen: false, 
  setHamburgerMenuIsOpen: () => {}
}

const hamburgerMenuContext = createContext<HamburgerMenuContext>(DEFAULT_VALUE);

export function HamburgerMenuProvider({ children }: any) {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(DEFAULT_VALUE.hamburgerMenuIsOpen) 

  return (
    <hamburgerMenuContext.Provider
      value={{hamburgerMenuIsOpen, setHamburgerMenuIsOpen}}
    >
      {children}
    </hamburgerMenuContext.Provider>
  );
}

export function useHamburgerMenu() {
  const context = useContext(hamburgerMenuContext);
  const {hamburgerMenuIsOpen, setHamburgerMenuIsOpen} = context;
  return {hamburgerMenuIsOpen, setHamburgerMenuIsOpen};
}
