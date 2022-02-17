import { ifIphoneX } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import SImage from 'react-native-scalable-image';
import styled from 'styled-components/native';
import EmptyImg from 'assets/empty-cart.png';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-bottom: ${ifIphoneX(40, 20)}px;
  background: ${({ theme }) => theme.colors.screen_background};
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 20px;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
`;

export const TotalLabel = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.dark};
  position: relative;
  top: 3px;
`;

export const TotalValue = styled.Text`
  font-weight: 600;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.darker};
`;

export const EmptyCartContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  position: relative;
  top: -60px;
`;

export const EmptyCart = styled.Text`
  font-style: italic;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.regular};
`;

export const EmptyCartImage = styled(SImage).attrs({
  source: EmptyImg,
  height: 100,
})`
  margin-bottom: 30px;
  position: relative;
  left: 15px;
  opacity: 0.6;
`;

export const SendButton = styled.TouchableOpacity`
  height: 40px;
  background: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 20px;
`;

export const SendButtonText = styled.Text`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.inverted_text_color};
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
})`
  position: relative;
  left: 5px;
`;
