import React from 'react';
import { ModalProps } from 'react-native';

import {
  ModalView,
  Backdrop,
  TitleContainer,
  Title,
  Container,
  Content,
  TextContent,
  DefaultButton,
  SuccessButton,
  ButtonText,
  ButtonsContainer,
  ConfirmButton,
} from './styles';

interface CustomModalProps extends ModalProps {
  close: () => void;
  confirm: () => void;
  title: string;
  isQuestion?: boolean;
}

export function Modal({
  close,
  confirm,
  title,
  children,
  isQuestion = false,
  ...rest
}: CustomModalProps): JSX.Element {
  return (
    <ModalView {...rest} animationType="slide" transparent statusBarTranslucent>
      <Backdrop />
      <Container>
        <Content>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <TextContent>{children}</TextContent>
          {!isQuestion ? (
            <SuccessButton onPress={close}>
              <ButtonText>OK</ButtonText>
            </SuccessButton>
          ) : (
            <ButtonsContainer>
              <DefaultButton onPress={close}>
                <ButtonText>Cancelar</ButtonText>
              </DefaultButton>
              <ConfirmButton onPress={confirm}>
                <ButtonText>Confirmar</ButtonText>
              </ConfirmButton>
            </ButtonsContainer>
          )}
        </Content>
      </Container>
    </ModalView>
  );
}
