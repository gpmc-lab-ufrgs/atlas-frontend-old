import React, { useState, createContext, useContext } from 'react';

export type SidebarContext = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<any>>;
};

const DEFAULT_VALUE_SIDEBAR_CONTEXT = {
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
};

export const sidebarContext = createContext<SidebarContext>(DEFAULT_VALUE_SIDEBAR_CONTEXT);

export function SidebarProvider({ children }: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(DEFAULT_VALUE_SIDEBAR_CONTEXT.isSidebarOpen);

  return <sidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>{children}</sidebarContext.Provider>;
}

export function useSidebar() {
  const context = useContext(sidebarContext);
  const { isSidebarOpen, setIsSidebarOpen } = context;
  return { isSidebarOpen, setIsSidebarOpen };
}
