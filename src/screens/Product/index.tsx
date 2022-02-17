import { Footer } from 'components/Footer';
import { QuantitySelector } from 'components/QuantitySelector';
import { useCart } from 'hooks/cart';
import React, { useMemo, useState } from 'react';

import {
  ProductScreenNavigationProp,
  ProductScreenRouteProp,
} from 'routes/Types';
import { formatCurrency } from 'shared/utils/string';

import {
  Container,
  Title,
  Image,
  Description,
  Price,
  NotesTitle,
  TextArea,
  ButtonsContainer,
  AddButton,
  AddButtonText,
} from './styles';

interface ProductProps {
  navigation: ProductScreenNavigationProp;
  route: ProductScreenRouteProp;
}

const Product = ({ navigation, route }: ProductProps) => {
  const { product } = route.params;
  const { insertOrUpdateProduct } = useCart();
  const [quantity, setQuantity] = useState('0');
  const [notes, setNotes] = useState('');

  const price = useMemo(() => {
    return formatCurrency(product.price);
  }, [product.price]);

  function handleAddProduct() {
    insertOrUpdateProduct(
      {
        ...product,
        quantity: Number(quantity),
        notes,
      },
      false,
    );

    navigation.reset({
      index: 1,
      routes: [{ name: 'Home' }, { name: 'Cart' }],
    });
  }

  return (
    <>
      <Container>
        <Title>{product.name}</Title>

        <Image source={{ uri: product.image }} />

        <Description>{product.description}</Description>
        <Price>{price}</Price>

        <NotesTitle>Observações</NotesTitle>
        <TextArea
          multiline
          autoCapitalize="sentences"
          autoCorrect={false}
          value={notes}
          onChangeText={setNotes}
          textAlignVertical="top"
        />

        <ButtonsContainer>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <AddButton
            onPress={() => handleAddProduct()}
            disabled={quantity === '0'}
          >
            <AddButtonText>ADICIONAR</AddButtonText>
          </AddButton>
        </ButtonsContainer>
      </Container>
      <Footer />
    </>
  );
};

export { Product };
