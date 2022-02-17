import { Footer } from 'components/Footer';
import { ProductCard } from 'components/ProductCard';
import { Product } from 'interfaces/product';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { api } from 'services/api';

import { Container, Title } from './styles';

const Home = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/products');
        setProducts(data);
      } catch (err) {
        Alert.alert(
          'Erro!',
          'Houve um erro ao buscar os produtos. Tente novamente.',
        );
      }
    })();
  }, []);

  return (
    <>
      <Container>
        <Title>Catálogo</Title>

        <FlatList
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
      </Container>
      <Footer />
    </>
  );
};

export { Home };
