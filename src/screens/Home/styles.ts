import { ifIphoneX } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-bottom: ${ifIphoneX(30, 20)}px;
  background: ${({ theme }) => theme.colors.screen_background};
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 20px;
`;
