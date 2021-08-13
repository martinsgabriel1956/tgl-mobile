import React from "react";

import { Text } from "react-native";
import { Footer } from "../../components/UI/NewBetButton";
import { Header } from "../../components/UI/Header";
import { BetTabRoutes } from "../../Routes/BetTabRoutes";

import { Container } from "./styles";

export function NewBet() {
  return (
    <Container>
      <Header />
      <Text>NewBet</Text>
    </Container>
  );
}
