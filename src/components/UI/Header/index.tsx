import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Container, Logo, LogoText, LogoBar } from "./styles";
import colors from "../../../utils/colors";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {
  const navigation = useNavigation();

  async function handleLogout() {
    await AsyncStorage.clear();
    navigation.navigate("SignIn");
  }

  return (
    <Container>
      <Logo>
        <RectButton onPress={handleLogout}>
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
