import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Container, Logo, LogoText, LogoBar, HeaderButtonsContainer } from "./styles";
import colors from "../../../utils/colors";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";

type HeaderProps = {
  cartActive: boolean,
}

export function Header({ cartActive }: HeaderProps) {
  const navigation = useNavigation();

  async function handleLogout() {
    await AsyncStorage.clear();
    navigation.navigate("Authentication");
  }

  return (
    <Container>
      <Logo>
        <RectButton onPress={() => navigation.navigate('Games')} >
          <LogoText>TGL</LogoText>
        </RectButton>
        <LogoBar />
      </Logo>

      <HeaderButtonsContainer>
        {cartActive === true && (
          <RectButton>
            <MaterialIcons name="shopping-cart" size={40} color={colors.primary} style={{
              marginTop: 10,
            }} />
          </RectButton>
        )}
        <RectButton 
          onPress={handleLogout}
          style={{
            marginLeft: 30
          }}
        >
          <MaterialIcons
            name="logout"
            size={40}
            color={colors.border}
            style={{
              marginTop: 10,
            }}
          />
        </RectButton>
        
      </HeaderButtonsContainer>
    </Container>
  );
}
