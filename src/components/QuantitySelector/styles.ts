import styled, { css } from 'styled-components/native';

interface SelectorProps {
  isFromCart?: boolean;
}

const buttonBase = css`
  border-radius: 8px;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.card_background};
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  flex-direction: row;
`;

export const RemoveButton = styled.TouchableOpacity<SelectorProps>`
  ${buttonBase};
  width: ${({ isFromCart }) => (isFromCart ? 30 : 40)}px;
  height: ${({ isFromCart }) => (isFromCart ? 30 : 40)}px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  position: relative;
  top: -1px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Quantity = styled.TextInput<SelectorProps>`
  margin: 0 5px;
  width: 70px;
  height: ${({ isFromCart }) => (isFromCart ? 30 : 40)}px;
  border-radius: 8px;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.border};
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.card_background};
  text-align: center;
  padding: 0;
`;

export const AddButton = styled.TouchableOpacity<SelectorProps>`
  ${buttonBase};
  width: ${({ isFromCart }) => (isFromCart ? 30 : 40)}px;
  height: ${({ isFromCart }) => (isFromCart ? 30 : 40)}px;
`;
