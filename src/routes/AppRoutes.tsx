import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from 'screens/Home';
import { Cart } from 'screens/Cart';
import { Product } from 'screens/Product';
import { RootStackParamList } from './Types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes = (): JSX.Element => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home"
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Cart" component={Cart} />
    <Stack.Screen name="Product" component={Product} />
  </Stack.Navigator>
);

export default AppRoutes;
