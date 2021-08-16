import React, { ReactNode } from "react";

import { Text, View } from "react-native";

import { Container, BetNumberText } from "./styles";

interface BetNumberProps {
  children: ReactNode;
}

export function BetNumber({ children }: BetNumberProps) {
  return (
    <Container>
      <View>
        <BetNumberText>{children}</BetNumberText>
      </View>
    </Container>
  );
}
