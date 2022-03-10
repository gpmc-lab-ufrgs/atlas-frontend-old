import React, { useState, createContext, useContext } from "react";

type SidebarContext = {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<any>>;
};

const DEFAULT_VALUE = {
  sidebarIsOpen: false,
  setSidebarIsOpen: () => {},
};

const sidebarContext = createContext<SidebarContext>(DEFAULT_VALUE);

export function SidebarProvider({ children }: any) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(
    DEFAULT_VALUE.sidebarIsOpen
  );

  return (
    <sidebarContext.Provider value={{ sidebarIsOpen, setSidebarIsOpen }}>
      {children}
    </sidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(sidebarContext);
  const { sidebarIsOpen, setSidebarIsOpen } = context;
  return { sidebarIsOpen, setSidebarIsOpen };
}
