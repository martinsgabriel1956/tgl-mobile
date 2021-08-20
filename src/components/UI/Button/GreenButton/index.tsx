import React, { ReactNode } from 'react';
import { AntDesign } from '@expo/vector-icons'; 

import { Container, GreenButtonText } from './styles';
import colors from '../../../../utils/colors';
import { RectButtonProps } from 'react-native-gesture-handler';

interface GreenButtonProps {
  children: ReactNode;
}

export function GreenButton({children}: GreenButtonProps) {
  return (
    <Container>
      <GreenButtonText>{children}</GreenButtonText>
      <AntDesign name="arrowright" size={40} color={colors.primary} />
    </Container>
  );
};


