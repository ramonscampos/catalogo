import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
} from 'react';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartProduct } from 'interfaces/product';
import { Cart } from 'interfaces/cart';
import { api } from 'services/api';

const CART_AS_KEY = '@catalogo:cart';

interface CartContextData {
  cart: Cart;
  insertOrUpdateProduct: (product: CartProduct, isFromCart: boolean) => void;
  removeProduct: (productId: string) => void;
  calcTotal: () => number;
  clear: () => void;
  sendOrder: () => Promise<void>;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart>({} as Cart);

  useEffect(() => {
    async function loadCart() {
      const data = await AsyncStorage.getItem(CART_AS_KEY);

      if (data) {
        setCart(JSON.parse(data));
      }
    }

    loadCart();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(CART_AS_KEY, JSON.stringify(cart));
  }, [cart]);

  const insertOrUpdateProduct = useCallback((product, isFromCart) => {
    setCart(curCart => {
      const formattedCart = Object.keys(curCart).length
        ? curCart
        : { id: uuidv4(), products: [] };
      let cartProduct = formattedCart.products.find(
        prod => prod.id === product.id,
      );

      if (cartProduct) {
        if (isFromCart) cartProduct.quantity = product.quantity;
        else cartProduct.quantity += product.quantity;
      } else {
        cartProduct = product;
        formattedCart.products.push(product);
      }

      return {
        ...curCart,
        products: curCart?.products?.map(x =>
          x.id === product.id ? cartProduct! : x,
        ) || [cartProduct],
      };
    });
  }, []);

  const removeProduct = useCallback(productId => {
    setCart(curCart => ({
      ...curCart,
      products: [...curCart.products.filter(x => x.id !== productId)],
    }));
  }, []);

  const calcTotal = useCallback(() => {
    const total = cart.products?.reduce((cur, next) => {
      return cur + Number(next.price) * next.quantity!;
    }, 0);

    return total || 0;
  }, [cart]);

  const clear = useCallback(() => {
    setCart({} as Cart);

    AsyncStorage.setItem(CART_AS_KEY, JSON.stringify([]));
  }, []);

  const sendOrder = useCallback(async () => {
    await api.post('/orders', cart);
    clear();
  }, [cart, clear]);

  return (
    <CartContext.Provider
      value={{
        cart,
        insertOrUpdateProduct,
        removeProduct,
        calcTotal,
        clear,
        sendOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}

export { CartContext, CartProvider, useCart };
