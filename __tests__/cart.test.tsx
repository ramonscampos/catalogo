import React, { useEffect } from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import { formatCurrency } from '../src/shared/utils/string';
import { CartContext, CartProvider } from '../src/hooks/cart';
import cartMock from './mocks/cart.json';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
}));

it('Render total from empty cart (default)', () => {
  const TestComponent = () => {
    const { calcTotal } = React.useContext(CartContext);
    const total = formatCurrency(calcTotal());

    return <Text>{total}</Text>;
  };

  const screen = render(<TestComponent />, { wrapper: CartProvider });

  screen.getByText('R$ 0,00');
});

it('Render cart products total', () => {
  const TestComponent = () => {
    const { insertOrUpdateProduct, calcTotal } = React.useContext(CartContext);
    const total = formatCurrency(calcTotal());

    useEffect(() => {
      cartMock.products.forEach(element => {
        insertOrUpdateProduct(element, false);
      });
    }, [insertOrUpdateProduct]);

    return <Text>{total}</Text>;
  };

  const screen = render(
    <CartProvider>
      <TestComponent />
    </CartProvider>,
  );

  screen.getByText('R$ 100,00');
});
