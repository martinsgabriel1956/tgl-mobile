import React from "react";

import { Text, View } from "react-native";

import { Container, BetBar, Numbers, BetInfo, BetGame, Price } from "./styles";

interface BetProps {
  numbers: number[] | string;
  price: number;
  type: string;
  color: string;
  date: string;
  deleteRow?: () => void;
  homePage?: boolean;
}

export function Bet({ type, price, numbers, color, date, deleteRow, homePage }: BetProps) {
  return (
    <Container>
      <BetBar color={color}></BetBar>
      <View>
        <Numbers>{numbers}</Numbers>
        <BetInfo>{date} - <Price>(R${price.toFixed(2).replace('.', ',')})</Price></BetInfo>
        <BetGame color={color}>{type}</BetGame>
      </View>
    </Container>
  );
}
