import styled from 'styled-components/native';
import SImage from 'react-native-scalable-image';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  height: ${getStatusBarHeight() + 70}px;
  background: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 3}px;
  flex-direction: row;
  padding-left: 30px;
  padding-right: 30px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 16px;
  left: 30px;
`;

export const BackButtonImage = styled(SImage).attrs({
  height: 27,
})``;

export const LogoContainer = styled.View``;

export const Logo = styled(SImage).attrs({
  height: 40,
})`
  position: relative;
  top: 5px;
`;
