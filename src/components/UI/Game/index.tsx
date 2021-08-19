import React, { ReactNode } from "react";

import { Container, GameText } from "./styles";

interface GameProps {
  children: ReactNode;
  onPress?: () => void;
  background: string;
  color: string;
  border: string;
  // title: string;
  // border: string;
}

export function Game({ children, background, color, onPress, border }: GameProps) {
  return (
    <Container onPress={onPress}>
      <GameText style={{ backgroundColor: background, borderColor: border, color: color}} >{children}</GameText>
    </Container>
  );
}
