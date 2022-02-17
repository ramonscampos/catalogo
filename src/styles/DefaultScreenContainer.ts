import { ifIphoneX } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export default styled.View`
  flex: 1;
  padding: 20px;
  padding-bottom: ${ifIphoneX(30, 20)}px;
  background: ${({ theme }) => theme.colors.screen_background};
`;
