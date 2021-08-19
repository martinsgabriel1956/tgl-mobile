import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Logo,
  LogoText,
  LogoBar,
  HeaderButtonsContainer,
  Badge,
  BadgeText
} from "./styles";

import colors from "../../../utils/colors";
import { cartActions } from "../../../store/Cart";

type HeaderProps = {
  cartActive?: boolean;
  clearFilters?: boolean;
};

type RootState = {
  cart: {
    cartItem: {}[];
  };
};

export function Header({ cartActive, clearFilters }: HeaderProps) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  let cartItem: {}[] = useSelector((state: RootState) => state.cart.cartItem);

  async function handleLogout() {
    await AsyncStorage.clear();
    navigation.navigate("Authentication");
  }

  function handleShowCart() {
    dispatch(cartActions.showCart());
  }

  function handleNavigateToHome() {
    navigation.navigate("Game");
    clearFilters
  }

  return (
    <Container>
      <Logo>
        <RectButton onPress={() => navigation.navigate("Games")}>
          <LogoText>TGL</LogoText>
        </RectButton>
        <LogoBar />
      </Logo>

      <HeaderButtonsContainer>
        {cartItem.length > 0 && cartActive === true && (
          <>
            <RectButton onPress={handleShowCart}>
              <Ionicons
                name="ios-cart-outline"
                size={40}
                color={colors.primary}
                style={{
                  marginTop: 10,
                }}
              />
            </RectButton>
            <Badge>
              <BadgeText>{cartItem.length}</BadgeText>
            </Badge>
          </>
        )}
        <RectButton
          onPress={handleLogout}
          style={{
            marginLeft: 30,
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
