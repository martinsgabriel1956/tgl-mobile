import React, { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface FooterProps {
  children: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <Container>
      {children}
    </Container>
  );
};


