import React, { useEffect, useState } from 'react';

import {
  Container,
  RemoveButton,
  ButtonText,
  Quantity,
  AddButton,
} from './styles';

interface QuantitySelectorProps {
  quantity: string;
  setQuantity: (qtd: string) => void;
  removeProductCallback?: () => void;
  isFromCart?: boolean;
}

const QuantitySelector = ({
  quantity,
  setQuantity,
  removeProductCallback,
  isFromCart = false,
  ...rest
}: QuantitySelectorProps): JSX.Element => {
  const [internalQuantity, setInternalQuantity] = useState(quantity);
  function handleRemoveQuantity() {
    if (isFromCart && quantity === '1') removeProductCallback?.();
    else if (Number(quantity) > 0) {
      const qtd = Number(quantity) - 1;

      setQuantity(qtd.toString());
    }
  }

  function handleAddQuantity() {
    const qtd = quantity === '0' ? 1 : Number(quantity) + 1;

    setQuantity(qtd.toString());
  }

  useEffect(() => {
    setInternalQuantity(quantity);
  }, [quantity]);

  return (
    <Container {...rest}>
      <RemoveButton
        isFromCart={isFromCart}
        onPress={() => handleRemoveQuantity()}
      >
        <ButtonText>-</ButtonText>
      </RemoveButton>
      <Quantity
        isFromCart={isFromCart}
        value={internalQuantity}
        onChangeText={value => {
          setInternalQuantity(value.replace(/[^0-9]/g, ''));
        }}
        onBlur={() => {
          if (internalQuantity) {
            if (internalQuantity === '0') removeProductCallback?.();
            else setQuantity(internalQuantity);
          } else {
            setInternalQuantity(quantity);
          }
        }}
        keyboardType="number-pad"
        maxLength={3}
      />
      <AddButton isFromCart={isFromCart} onPress={() => handleAddQuantity()}>
        <ButtonText>+</ButtonText>
      </AddButton>
    </Container>
  );
};

export { QuantitySelector };
