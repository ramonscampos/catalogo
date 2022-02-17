import { CartProduct } from 'interfaces/product';
import React, { useCallback, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from 'routes/Types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCart } from 'hooks/cart';
import { Modal } from 'components/Modal';
import { formatCurrency } from 'shared/utils/string';
import {
  Container,
  Image,
  Row,
  Name,
  Price,
  QuantitySelector,
  ModalContent,
  ModalContentText,
  ModalContentImage,
} from './styles';

interface ProductCardProps {
  product: CartProduct;
  isFromCart?: boolean;
}

const ProductCard = ({ product, isFromCart = false }: ProductCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [quantity, setQuantity] = useState(product.quantity?.toString() || '0');
  const [modalVisible, setModalVisible] = useState(false);
  const { insertOrUpdateProduct, removeProduct } = useCart();

  const price = useMemo(() => {
    return formatCurrency(product.price);
  }, [product.price]);

  function handleEnterProduct() {
    navigation.navigate('Product', { product });
  }

  const handleRemoveProduct = useCallback(() => {
    if (isFromCart) {
      setModalVisible(true);
    }
  }, [isFromCart]);

  const handleChangeQuantity = useCallback(
    (qtd: string) => {
      setQuantity(qtd);
      if (isFromCart) {
        insertOrUpdateProduct(
          { ...product, quantity: Number(qtd) },
          isFromCart,
        );
      }
    },
    [isFromCart, insertOrUpdateProduct, product],
  );

  return (
    <Container onPress={() => handleEnterProduct()}>
      <Image source={{ uri: product.image }} />
      <Row>
        <Name numberOfLines={2}>{product.name}</Name>
        <Price>{price}</Price>
        {isFromCart && (
          <QuantitySelector
            quantity={quantity}
            setQuantity={qtd => handleChangeQuantity(qtd)}
            isFromCart={!!isFromCart}
            removeProductCallback={() => handleRemoveProduct()}
          />
        )}
      </Row>

      <Modal
        visible={modalVisible}
        close={() => {
          setQuantity(product.quantity!.toString());
          setModalVisible(false);
        }}
        confirm={() => {
          removeProduct(product.id);
          setModalVisible(false);
        }}
        title="Confirmação"
        isQuestion
      >
        <ModalContent>
          <ModalContentText>
            Deseja remover este produto do carrinho?{'\n'}
          </ModalContentText>
          <ModalContentImage source={{ uri: product.image }} />
        </ModalContent>
      </Modal>
    </Container>
  );
};

export { ProductCard };
