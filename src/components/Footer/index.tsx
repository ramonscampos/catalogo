import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCart } from 'hooks/cart';
import React, { useMemo } from 'react';
import { RootStackParamList } from 'routes/Types';

import { Container, Quantity, CartContainer, CartImage, Total } from './styles';

const Footer = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { cart, calcTotal } = useCart();

  function formatProductsQuantity() {
    const length = cart.products?.length;
    if (!length) return '(Vazio)';

    return `${length} produto${length > 1 ? 's' : ''}`;
  }

  const formattedTotal = useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(calcTotal());
  }, [calcTotal]);

  return (
    <Container>
      <Quantity>{formatProductsQuantity()}</Quantity>
      <CartContainer
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Cart')}
      >
        <CartImage />
      </CartContainer>
      <Total>{formattedTotal}</Total>
    </Container>
  );
};

export { Footer };
