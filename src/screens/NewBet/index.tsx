import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Game } from "../../components/UI/Game";

import { Header } from "../../components/UI/Header";

import { Container, TypeGameText, ChooseGame } from "./styles";

export function NewBet() {
  return (
    <Container>
      <Header />
      <TypeGameText>New Bet For Lotomania</TypeGameText>
      <ChooseGame>Choose a game</ChooseGame>
      <ScrollView>
        <Game>
          Lotofácil</Game>
      </ScrollView>
    </Container>
  );
}
