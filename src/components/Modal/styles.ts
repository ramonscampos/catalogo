import styled, { css } from 'styled-components/native';
import { BlurView } from '@react-native-community/blur';
import { Modal, Platform } from 'react-native';

export const ModalView = styled(Modal)`
  background: red;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.View`
  align-items: center;
  border-color: ${({ theme }) => theme.colors.light};
  border-bottom-width: 1px;
  padding-bottom: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 22px;
`;

export const Backdrop = styled(BlurView).attrs({
  blurAmount: Platform.OS === 'android' ? 100 : 50,
  blurType: 'dark',
})`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  background: white;
  width: 80%;
  height: 300px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  elevation: 8;
  padding: 20px;
  position: relative;
`;

export const TextContent = styled.View`
  justify-content: center;
  flex: 1;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 18px;
  text-align: center;
`;

const buttonStyle = css`
  height: 40px;
  background: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.inverted_text_color};
`;

export const DefaultButton = styled.TouchableOpacity`
  ${buttonStyle};
  flex: 1;
  background: ${({ theme }) => theme.colors.regular};
`;

export const SuccessButton = styled.TouchableOpacity`
  ${buttonStyle};
  background: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
`;

export const ConfirmButton = styled.TouchableOpacity`
  ${buttonStyle};
  flex: 1;
  background: ${({ theme }) => theme.colors.danger};
  margin-left: 10px;
`;
