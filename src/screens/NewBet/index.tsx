import React, { useState, useEffect } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import * as Animatable from "react-native-animatable";
import { View } from "react-native";

import { RootState } from "../../interfaces/RootState";

import { BetNumber } from "../../components/UI/BetNumber";
import { Game } from "../../components/UI/Game";
import { Header } from "../../components/UI/Header";
import { ItemTypes } from "../../interfaces/ItemTypes";
import { Cart } from "../../components/Cart";
import { Modal } from "../../components/UI/Modal";

import { api } from "../../services/api";

import { newBetActions } from "../../store/NewBet";
import { cartActions } from "../../store/Cart";

import {
  Container,
  TypeGameText,
  ChooseGame,
  TypeGameContainer,
  DescriptionContainer,
  FillYourBetText,
  DescriptionText,
  BetNumbersContainer,
  GameContainer,
  AnimationBetContainer,
  Bar,
  BarContainer,
  DescriptionAnimatedContainer,
  BetNumberSelectedContainer,
  ButtonContainer,
  ActionButton,
  AddToCartButton,
  ActionButtonText,
  AddToCartButtonText,
  BetCloseIcon,
} from "./styles";

let cartArr: any[] = [];

export function NewBet() {
  const dispatch = useDispatch();

  let gameNumber: number[] = useSelector(
    (state: RootState) => state.newBet.items
  );
  let cartItem: {}[] = useSelector((state: RootState) => state.cart.cartItem);
  let showCart: boolean = useSelector(
    (state: RootState) => state.cart.showCart
  );

  const [items, setItems] = useState([]);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [range, setRange] = useState(0);
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("");
  const [maxNumber, setMaxNumber] = useState(0);
  const [gameId, setGameId] = useState(0);
  const [showBetNumbers, setShowBetNumbers] = useState(false);

  const [modalColor, setModalColor] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [message, setmessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    api.get("/games").then((res) => setItems(res.data));
  }, []);

  function displayAlert(message: string, title: string, color: string) {
    setModalTitle(title);
    setModalColor(color);
    setmessage(message);
    setShowAlert(true);
  }

  function clearGame() {
    return dispatch(newBetActions.clearGame());
  }

  function completeGame(maxNumber: number, range: number) {
    if (gameNumber.length === maxNumber) {
      clearGame();
      return dispatch(newBetActions.completeGame({ maxNumber, range }));
    }
    return dispatch(newBetActions.completeGame({ maxNumber, range }));
  }

  function onAddToCart(
    numbersGame: number[],
    price: number,
    type: string,
    color: string,
    maxNumber: number,
    gameId: number
  ) {
    if (numbersGame.length !== maxNumber) {
      return displayAlert(
        `Choose more ${
          maxNumber - gameNumber.length
        } numbers to complete your bet`,
        "Error: ",
        `red`
      );
    }

    if(numbersGame.length > maxNumber) displayAlert(
      `You select all the numbers to complete your bet`,
      "Error: ",
      `red`
    );

    dispatch(
      cartActions.receiveGame({ numbersGame, price, type, color, gameId })
    );
    clearGame();
    dispatch(cartActions.showCart());
  }

  function handleGameSelect(index: number) {
    clearGame();

    setDescription(items[index]["description"]);
    setRange(items[index]["range"]);
    setType(items[index]["type"]);
    setGameId(items[index]["id"]);
    setMaxNumber(items[index]["max_number"]);
    setPrice(items[index]["price"]);
    setColor(items[index]["color"]);

    setShowBetNumbers(true);
  }

  function handleSelectButton(
    value: number,
    maxNumber: number,
    price: number,
    gameName: string,
    color: string
  ) {
    dispatch(newBetActions.addToCart({ value, maxNumber, price, gameName }));
  }

  function gameButtons() {
    cartArr = [];

    for (let i = 1; i <= range; i++) {
      cartArr.push(
        <BetNumber
          color={gameNumber.find((item) => item === i) ? color : "#ADC0C4"}
          onPress={() => handleSelectButton(i, maxNumber, price, type, color)}
          key={i}
        >
          {i < 10 ? `0${i}` : i}
        </BetNumber>
      );
    }
    return cartArr;
  }

  function hideAlert() {
    setShowAlert(false);
  }

  return (
    <>
      <Container showCart={showCart}>
        <Header
          cartActive={gameNumber.length >= 1 || (cartItem.length >= 1 && true)}
        />
        <TypeGameText>New Bet For {type}</TypeGameText>
        <ChooseGame>Choose a game</ChooseGame>

        <TypeGameContainer
          horizontal
          showsHorizontalScrollIndicator={false}
          zoomScale={1}
        >
          {items &&
            items.map((item: ItemTypes, index: number) => (
              <GameContainer key={index}>
                <Game
                  key={index}
                  onPress={() => handleGameSelect(index)}
                  color={type !== item.type ? item.color : "white"}
                  background={type === item.type ? item.color : "transparent"}
                  border={item.color}
                >
                  {item.type}
                </Game>
              </GameContainer>
            ))}
        </TypeGameContainer>
        <DescriptionContainer top={showBetNumbers}>
          {showBetNumbers && (
            <Animatable.View animation="bounceInLeft" duration={800}>
              {gameNumber && gameNumber.length <= 0 && (
                <DescriptionAnimatedContainer
                  animation="fadeInDown"
                  duration={800}
                >
                  <FillYourBetText>Fill your bet</FillYourBetText>
                  <DescriptionText>{description}</DescriptionText>
                </DescriptionAnimatedContainer>
              )}

              <BetNumberSelectedContainer
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {gameNumber &&
                  gameNumber.length >= 1 &&
                  gameNumber.map((value: number) => (
                    <View key={value}>
                      <BetNumber
                        key={value}
                        onPress={() =>
                          handleSelectButton(
                            value,
                            maxNumber,
                            price,
                            type,
                            color
                          )
                        }
                        color={color}
                      >
                        {value < 10 ? `0${value}` : value}
                      </BetNumber>
                      <BetCloseIcon>
                        <AntDesign name="close" size={12} color="white" />
                      </BetCloseIcon>
                    </View>
                  ))}
              </BetNumberSelectedContainer>
              {gameNumber && gameNumber.length >= 1 && (
                <ButtonContainer animation="fadeInUp" duration={800}>
                  <ActionButton onPress={() => completeGame(maxNumber, range)}>
                    <ActionButtonText>Complete Game</ActionButtonText>
                  </ActionButton>
                  <ActionButton onPress={clearGame}>
                    <ActionButtonText>Clear Game</ActionButtonText>
                  </ActionButton>
                  <AddToCartButton
                    onPress={() =>
                      onAddToCart(
                        gameNumber,
                        price,
                        type,
                        color,
                        maxNumber,
                        gameId
                      )
                    }
                  >
                    <Ionicons
                      name="ios-cart-outline"
                      size={20}
                      color="white"
                      style={{
                        marginBottom: 4,
                        marginLeft: 4,
                      }}
                    />
                    <AddToCartButtonText>Add To Cart</AddToCartButtonText>
                  </AddToCartButton>
                </ButtonContainer>
              )}
              <BarContainer>
                <Bar />
              </BarContainer>
            </Animatable.View>
          )}
        </DescriptionContainer>

        <BetNumbersContainer showsHorizontalScrollIndicator={false}>
          <AnimationBetContainer
            animation="fadeIn"
            duration={300}
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {items && gameButtons()}
          </AnimationBetContainer>
        </BetNumbersContainer>
      </Container>
      {showCart && <Cart />}

      <Modal
        title={modalTitle}
        color={modalColor}
        showAlert={showAlert}
        callback={hideAlert}
        message={message}
      />
    </>
  );
}
