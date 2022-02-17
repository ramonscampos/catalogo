import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components/native';
import { CartProvider } from './cart';

interface AppProvider {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProvider): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </CartProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
