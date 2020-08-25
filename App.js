// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
import React from 'react';
import { AppContainer } from './src/routes';
import { Provider as CartProvider } from './src/context/CartContext';
import { Provider as AppLoadProvider } from './src/context/AppLoadContext';

export default () => (
  <AppLoadProvider>
    <CartProvider>
      <AppContainer />
    </CartProvider>
  </AppLoadProvider>
);
