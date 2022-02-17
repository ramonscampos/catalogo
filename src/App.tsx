import React from 'react';
import { View, StatusBar } from 'react-native';
import AppProvider from 'hooks';
import { Routes } from 'routes';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { Header } from 'components/Header';

function App() {
  return (
    <AppProvider>
      <View style={{ flex: 1 }}>
        <Header />
        <Routes />
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
      </View>
    </AppProvider>
  );
}

export default App;
