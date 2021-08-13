import React, { ReactNode } from 'react';

import { Container, GameText } from './styles';

interface GameProps {
  children: ReactNode;
}

export function Game({ children }: GameProps) {
  return (
    <Container>
      <GameText>{children}</GameText>
    </Container>
  );
};


