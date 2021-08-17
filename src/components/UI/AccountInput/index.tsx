import React, { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface AccountInputProps {
  children: ReactNode;
}

export function AccountInput({ children }: AccountInputProps) {
  return (
    <Container>
      <Text>AccountInput</Text>
      {children}
    </Container>
  );
};


