import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BetNumber } from "../../components/UI/BetNumber";
import { Game } from "../../components/UI/Game";

import { Header } from "../../components/UI/Header";

import {
  Container,
  TypeGameText,
  ChooseGame,
  TypeGameContainer,
  DescriptionContainer,
  FillYourBetText,
  DescriptionText,
  BetNumbersContainer
} from "./styles";

export function NewBet() {
  return (
    <Container>
      <>
        <Header />
        <TypeGameText>New Bet For Lotomania</TypeGameText>
        <ChooseGame>Choose a game</ChooseGame>
        <TypeGameContainer horizontal showsHorizontalScrollIndicator={false}>
          <Game>Lotofácil</Game>
          <Game>Lotofácil</Game>
          <Game>Lotofácil</Game>
        </TypeGameContainer>
        <DescriptionContainer>
          <FillYourBetText>Fill your bet</FillYourBetText>
          <DescriptionText>
            Escolha 15 números para apostar na lotofácil. Você ganha acertando
            11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora
            você joga de onde estiver!
          </DescriptionText>
        </DescriptionContainer>
        <BetNumbersContainer
          showsHorizontalScrollIndicator={false}
        >
        
         <View
          style={{
           flexDirection: 'row', flexWrap: 'wrap'
         }}>
            <BetNumber>01</BetNumber>
         </View>
        </BetNumbersContainer>
      </>
    </Container>
  );
}
