import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { View } from "react-native";

import { Container, Logo, LogoText, LogoBar } from "./styles";
import colors from "../../../utils/colors";
import { RectButton } from "react-native-gesture-handler";

export function Header() {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo>
        <LogoText>TGL</LogoText>
        <LogoBar />
      </Logo>
      <RectButton onPress={() => navigation.navigate('Authentication')}>
        <MaterialIcons name="logout" size={40} color={colors.border} />
      </RectButton>
    </Container>
  );
}
