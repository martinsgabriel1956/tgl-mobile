import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 

import { Container, SingUpText } from './styles';
import colors from '../../../utils/colors';

export function SingUpButton(props: RectButtonProps) {
  return (
    <Container {...props}>
      <SingUpText>Sign Up</SingUpText>
      <AntDesign name="arrowright" size={40} color={colors.title} />
    </Container>
  );
};

