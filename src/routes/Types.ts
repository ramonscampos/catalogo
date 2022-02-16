import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Product } from 'interfaces/product';

export type RootStackParamList = {
  Home: undefined;
  Product: { product: Product } | undefined;
  Cart: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type CartScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Cart'
>;

export type ProductScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Product'
>;

export type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;
