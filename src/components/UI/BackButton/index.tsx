import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 

import colors from '../../../utils/colors';
import { Container, SingUpText } from './styles';
import { ButtonProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';


export function BackButton(props: RectButtonProps) {
  return (
    <Container {...props}>
      <AntDesign name="arrowleft" size={40} color={colors.title} />
      <SingUpText>Back</SingUpText>
    </Container>
  );
};


