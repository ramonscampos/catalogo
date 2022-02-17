import React from 'react';

import LogoImg from 'assets/logo_white.png';
import BackImg from 'assets/back_white.png';

import { useNavigation, useNavigationState } from '@react-navigation/native';

import {
  Container,
  BackButton,
  BackButtonImage,
  LogoContainer,
  Logo,
} from './styles';

const Header = (): JSX.Element => {
  const navigation = useNavigation();
  const index = useNavigationState(state => state?.index);

  function handleBackButton() {
    navigation.goBack();
  }

  return (
    <Container>
      {index > 0 && (
        <BackButton onPress={() => handleBackButton()}>
          <BackButtonImage source={BackImg} />
        </BackButton>
      )}
      <LogoContainer>
        <Logo source={LogoImg} />
      </LogoContainer>
    </Container>
  );
};

export { Header };
