import styled, { css } from 'styled-components/native';
import SImage from 'react-native-scalable-image';
import { RFValue } from 'react-native-responsive-fontsize';
import { QuantitySelector as Selector } from 'components/QuantitySelector';
import { Platform } from 'react-native';

export const Container = styled.TouchableOpacity`
  border-color: ${({ theme }) => theme.colors.border};
  border-width: 0.5px;
  border-radius: 8px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.colors.card_background};
  box-shadow: 3px 3px 2px ${({ theme }) => theme.colors.card_shadow};

  ${() => {
    if (Platform.OS === 'android') {
      return css`
        elevation: 5;
      `;
    }
    return '';
  }}

  margin: 0 5px 10px;
  align-self: center;
`;

export const Image = styled(SImage).attrs({
  height: 60,
})``;

export const Row = styled.View`
  flex: 1;
  margin-left: 15px;
`;

export const Name = styled.Text``;

export const Price = styled.Text`
  margin-top: 10px;
  font-size: ${RFValue(16)}px;
  font-weight: 600;
`;

export const QuantitySelector = styled(Selector)`
  align-self: flex-end;
  margin-top: 15px;
`;

export const ModalContent = styled.View`
  align-items: center;
`;

export const ModalContentText = styled.Text`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${RFValue(17)}px;
  text-align: center;
`;

export const ModalContentImage = styled(SImage).attrs({
  width: 80,
})``;
