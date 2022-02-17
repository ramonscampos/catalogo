import { ifIphoneX } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import SImage from 'react-native-scalable-image';
import CartImg from 'assets/cart2.png';
import { Platform } from 'react-native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  height: ${ifIphoneX(80, 60)}px;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 20px 0;
`;

export const Quantity = styled.Text`
  color: ${({ theme }) => theme.colors.inverted_text_color};
  font-size: ${RFValue(17)}px;
  font-weight: 600;
`;

export const Total = styled.Text`
  color: ${({ theme }) => theme.colors.inverted_text_color};
  font-size: ${RFValue(17)}px;
  font-weight: 600;
`;

export const CartContainer = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.card_background};
  width: 80px;
  height: 80px;
  border-radius: 40px;
  position: relative;
  top: -50px;
  justify-content: center;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.border};
  /* border-width: 0.5px; */

  ${() => {
    if (Platform.OS === 'android') {
      return css`
        elevation: 1;
      `;
    }
    return css`
      box-shadow: 0px -2px 2px ${({ theme }) => theme.colors.card_shadow};
    `;
  }}
`;

export const CartImage = styled(SImage).attrs({
  width: 60,
  source: CartImg,
})`
  position: relative;
  left: -1px;
`;
