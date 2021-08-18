import React, { ReactNode } from 'react';
import { ButtonProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, GameText } from './styles';

interface GameProps {
  children: ReactNode;
  onPress: () => void;
  background: string;
  color: string;
  title: string;
}

export function Game({children, ...props}: GameProps) {
  return (
    <Container {...props}>
      <GameText>{children}</GameText>
    </Container>
  );
};


