import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from '@reco-ui/theme';
import { CSSReset } from '@reco-ui/css-reset';

export type RecoProviderProps = {
  children: ReactNode;
  theme?: object;
};

export const RecoProvider = ({ children, theme }: RecoProviderProps) => {
  const extendedTheme = {
    ...defaultTheme,
    ...theme
  };

  return (
    <ThemeProvider theme={extendedTheme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
};
