import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from '@reco-ui/theme';
import { CSSReset } from '@reco-ui/css-reset';

export type RecoProviderProps = {
  children: ReactNode;
  theme?: object;
};

export const RecoProvider = ({ children, theme }: RecoProviderProps) => {
  return (
    <ThemeProvider theme={theme ? theme : defaultTheme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
};
