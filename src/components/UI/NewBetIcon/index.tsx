import React from "react";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { Container } from "./styles";

import betIcon from '../../../assets/icon.png'  
import { Image } from "react-native";

export function NewBetIcon() {
  return (
    <Container>
      <Image source={betIcon} />
    </Container>
  );
}
