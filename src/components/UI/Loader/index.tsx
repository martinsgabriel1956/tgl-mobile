import React, { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface LoaderProps {
  children: ReactNode;
}

export function Loader({ children }: LoaderProps) {
  return (
    <Container>
      <Text>Loader</Text>
      {children}
    </Container>
  );
};


