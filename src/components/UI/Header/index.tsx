import React, { useEffect, useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "../Modal";
import {
  Container,
  Logo,
  LogoText,
  LogoBar,
  HeaderButtonsContainer,
  Badge,
  BadgeText,
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

  const [modalColor, setModalColor] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  function displayAlert(color: string) {
    setModalColor(color);
    setShowAlert(true);
  }

  async function handleLogout() {
    displayAlert(`${colors.primary}`);
    await AsyncStorage.clear();
    setTimeout(() => {}, 2000);
    navigation.navigate("Authentication");
  }

  function handleShowCart() {
    dispatch(cartActions.showCart());
  }

  function hideAlert() {
    setShowAlert(false);
  }

  return (
    <>
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
            <Ionicons
              name="log-out-outline"
              size={40}
              color={colors.border}
              style={{
                marginTop: 10,
              }}
            />
          </RectButton>
        </HeaderButtonsContainer>
      </Container>
      <Modal
        title="Hey!!"
        color={modalColor}
        showAlert={showAlert}
        callback={hideAlert}
        message="Thanks, for bet with us!!"
      />
    </>
  );
}
