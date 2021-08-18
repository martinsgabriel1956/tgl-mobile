import React, { ReactNode } from "react";

import { Text, View } from "react-native";

import { Container, BetNumberText } from "./styles";

interface BetNumberProps {
  children: ReactNode;
  color: string;
  onPress: () => void;
}

export function BetNumber({ children, ...props }: BetNumberProps) {
  return (
    <Container onPress={props.onPress} color={props.color} >
      <View>
        <BetNumberText>{children}</BetNumberText>
      </View>
    </Container>
  );
}
