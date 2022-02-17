import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import SImage from 'react-native-scalable-image';
import { Dimensions } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const screenWidth = Dimensions.get('screen').width;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: ifIphoneX(80, 60),
  },
  showsVerticalScrollIndicator: false,
})`
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

export const Image = styled(SImage).attrs({
  width: screenWidth * 0.8,
})`
  align-self: center;
  margin-bottom: 20px;
`;

export const Description = styled.Text`
  text-align: justify;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Price = styled.Text`
  font-size: ${RFValue(30)}px;
  font-weight: bold;
  margin-top: 20px;
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.darker};
`;

export const NotesTitle = styled.Text`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.darker};
  font-weight: 600;
  font-size: ${RFValue(15)}px;
  margin-left: 5px;
  margin-bottom: 5px;
`;

export const TextArea = styled.TextInput`
  width: 100%;
  height: 150px;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 10px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const AddButton = styled.TouchableOpacity`
  height: 40px;
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.regular : theme.colors.secondary};
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-left: 15px;
  border-radius: 8px;
`;

export const AddButtonText = styled.Text`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.inverted_text_color};
`;
