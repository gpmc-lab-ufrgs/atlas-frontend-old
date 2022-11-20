import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import palette from './palette';

const theme = createTheme({ ...palette });

const AtlasTheme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AtlasTheme;
