import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { RectButton } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../../services/api";
import { useNavigation } from "@react-navigation/core";

import { cartActions } from "../../../store/Cart";

import { Bet } from "../Bet";
import { Modal } from "../Modal";

import {
  Container,
  CartTitle,
  CartTotalText,
  CartTotalTextContainer,
  ValueText,
  CloseContainer,
  Bets,
  Strong,
  SaveCartContainer,
  SaveText,
  SaveButton,
  CartTitleContainer,
  BetsContainer,
} from "./styles";

import colors from "../../../utils/colors";

type RootState = {
  cart: {
    cartItem: {
      game_id: number;
      id: string;
      numbers: number[] | string;
      total_price: number;
      type: string;
      color: string;
    }[];
    totalPrice: number;
  };
};

export function Cart() {
  const navigation = useNavigation();

  let date = new Date();
  let dateString =
    date.getDate() + "/0" + (date.getMonth() + 1) + "/" + date.getFullYear();

  const dispatch = useDispatch();

  const [modalColor, setModalColor] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [message, setmessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  let cartItem: {
    game_id: number;
    id: string;
    numbers: number[] | string;
    total_price: number;
    type: string;
    color: string;
  }[] = useSelector((state: RootState) => state.cart.cartItem);

  let totalPrice: number = useSelector(
    (state: RootState) => state.cart.totalPrice
  );

  function closeCart() {
    dispatch(cartActions.closeCart());
  }

  function deleteGame(id: string, price: number) {
    dispatch(cartActions.deleteGame({ id, price }));
  }

  async function saveGame(game: {}[]) {
    const token = await AsyncStorage.getItem("token");

    if (totalPrice < 30) {
      const stillNotReachATotalPrice = 30 - totalPrice;

      displayAlert(
        `Faltam R$ ${stillNotReachATotalPrice
          .toFixed(2)
          .replace(".", ",")} para o valor minimo`,
        "Oops!",
        `${colors.primary}`
      );
      return;
    }

    api
      .post(
        "/bets",
        {
          bets: game,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        displayAlert(
          `Your bet was saved successfully!`,
          "Hey!",
          `${colors.primary}`
        );
        setTimeout(() => {
          navigation.navigate("Games");
        }, 3000);
        
        return dispatch(cartActions.clearCart());
      })
      .catch(() => {
        displayAlert(
          `Something went wrong, try again!`,
          "Oops!",
          `${colors.primary}`
        );
      });
  }

  function displayAlert(message: string, title: string, color: string) {
    setModalTitle(title);
    setModalColor(color);
    setmessage(message);

    setShowAlert(true);
  }

  function hideAlert() {
    setShowAlert(false);
  }

  return (
    <>
      <Container>
        <Animatable.View animation="bounceInRight" duration={800}>
          <CloseContainer>
            <RectButton onPress={closeCart}>
              <Ionicons name="close" size={38} color={colors.primary} />
            </RectButton>
          </CloseContainer>
          <CartTitleContainer>
            <Ionicons
              name="ios-cart-outline"
              size={34}
              color={colors.primary}
            />
            <CartTitle>Cart</CartTitle>
          </CartTitleContainer>
          <BetsContainer horizontal={false}>
            {cartItem.map(
              (item: {
                game_id: number;
                id: string;
                numbers: number[] | string;
                total_price: number;
                type: string;
                color: string;
              }) => (
                <Bets key={item.id}>
                  <Bet
                    key={item.id}
                    numbers={item.numbers}
                    type={item.type}
                    color={item.color}
                    date={dateString}
                    price={item.total_price}
                    deleteRow={() => deleteGame(item.id, item.total_price)}
                    inHomePage={false}
                  />
                </Bets>
              )
            )}
          </BetsContainer>
          <CartTotalTextContainer>
            <CartTotalText>
              <Strong
                style={{
                  fontStyle: "italic",
                }}
              >
                Cart
              </Strong>{" "}
              Total:
            </CartTotalText>
            <ValueText>
              <Strong>R$ {totalPrice.toFixed(2).replace(".", ",")}</Strong>
            </ValueText>
          </CartTotalTextContainer>
          <SaveCartContainer>
            <SaveButton onPress={() => saveGame(cartItem)}>
              <SaveText>Save</SaveText>
              <Ionicons name="arrow-forward" size={36} color={colors.primary} />
            </SaveButton>
          </SaveCartContainer>
          <Modal
            title={modalTitle}
            color={modalColor}
            showAlert={showAlert}
            callback={hideAlert}
            message={message}
          />
        </Animatable.View>
      </Container>
    </>
  );
}
