import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 

import colors from '../../../utils/colors';
import { Container, SingUpText } from './styles';

export function BackButton() {
  return (
    <Container>
      <AntDesign name="arrowleft" size={40} color={colors.title} />
      <SingUpText>Back</SingUpText>
    </Container>
  );
};


