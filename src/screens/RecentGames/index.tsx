import React from "react";
import { ScrollView, Text } from "react-native";
import { Bet } from "../../components/UI/Bet";
import { Game } from "../../components/UI/Game";

import { Header } from "../../components/UI/Header";

import {
  Container,
  RecentGamesText,
  TypeGameContainer,
  Filters,
  BetsContainer
} from "./styles";

export function RecentGames() {
  return (
    <Container>
      <Header />
      <RecentGamesText>Recent Games</RecentGamesText>
      <Filters>Filters</Filters>
      <TypeGameContainer horizontal showsHorizontalScrollIndicator={false}>
        <Game>Lotofácil</Game>
        <Game>Lotofácil</Game>
        <Game>Lotofácil</Game>
      </TypeGameContainer>
      <BetsContainer>
       
        <Bet
          numbers={'05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18 '}
          type={'lotomania'}
          color={'#000'}
          date={'2021/08/12'}
          price={25}
          inHomePage={true}
        />
      </BetsContainer>
    </Container>
  );
}
