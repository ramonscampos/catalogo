import React, { useMemo, useState } from 'react';
import { ProductCard } from 'components/ProductCard';
import { useCart } from 'hooks/cart';
import { FlatList } from 'react-native-gesture-handler';
import SuccessImg from 'assets/success.png';

import { Modal } from 'components/Modal';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'routes/Types';
import {
  Container,
  Title,
  TotalContainer,
  TotalLabel,
  TotalValue,
  EmptyCartContainer,
  EmptyCartImage,
  EmptyCart,
  SendButton,
  SendButtonText,
  ModalContent,
  ModalContentText,
  ModalContentImage,
} from './styles';

const Cart = () => {
  const { cart, calcTotal, sendOrder } = useCart();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const formattedTotal = useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(calcTotal());
  }, [calcTotal]);

  async function handleSendProduct() {
    try {
      await sendOrder();
      setModalVisible(true);
    } catch {
      Alert.alert('', 'Ocorreu um erro com seu pedido. Tente novamente.');
    }
  }

  function resetNavigation() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  return (
    <Container>
      {cart.products?.length ? (
        <>
          <Title>Carrinho</Title>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cart.products}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ProductCard isFromCart product={item} />}
          />

          <TotalContainer>
            <TotalLabel>TOTAL</TotalLabel>
            <TotalValue>{formattedTotal}</TotalValue>
          </TotalContainer>

          <SendButton onPress={() => handleSendProduct()}>
            <SendButtonText>ENVIAR PEDIDO</SendButtonText>
          </SendButton>
        </>
      ) : (
        <EmptyCartContainer>
          <EmptyCartImage />
          <EmptyCart>Seu carrinho está vazio!</EmptyCart>
        </EmptyCartContainer>
      )}

      <Modal
        visible={modalVisible}
        close={() => {
          resetNavigation();
          setModalVisible(false);
        }}
        confirm={() => {
          resetNavigation();
          setModalVisible(false);
        }}
        title="Sucesso!"
      >
        <ModalContent>
          <ModalContentText>
            Seu pedido foi enviado com sucesso!{'\n'}
          </ModalContentText>
          <ModalContentImage source={SuccessImg} />
        </ModalContent>
      </Modal>
    </Container>
  );
};

export { Cart };
