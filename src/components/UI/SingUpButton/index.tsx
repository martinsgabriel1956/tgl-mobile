import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 

import { Container, SingUpText } from './styles';
import colors from '../../../utils/colors';

export function SingUpButton() {
  return (
    <Container>
      <SingUpText>Sign Up</SingUpText>
      <AntDesign name="arrowright" size={40} color={colors.title} />
    </Container>
  );
};

