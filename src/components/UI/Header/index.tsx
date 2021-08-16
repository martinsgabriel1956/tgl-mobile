import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Container, Logo, LogoText, LogoBar } from "./styles";
import colors from "../../../utils/colors";
import { RectButton } from "react-native-gesture-handler";

export function Header() {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo>
        <RectButton onPress={() => navigation.goBack()}>
          <LogoText>TGL</LogoText>
        </RectButton>
        <LogoBar />
      </Logo>
      <RectButton onPress={() => navigation.navigate("Authentication")}>
        <MaterialIcons
          name="logout"
          size={40}
          color={colors.border}
          style={{
            marginTop: 10,
          }}
        />
      </RectButton>
    </Container>
  );
}
