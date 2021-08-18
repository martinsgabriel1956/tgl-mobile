import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import * as Animatable from "react-native-animatable";

import { BetNumber } from "../../components/UI/BetNumber";
import { Game } from "../../components/UI/Game";
import { Header } from "../../components/UI/Header";
import { ItemTypes } from "../../interfaces/ItemTypes";

import { api } from "../../services/api";
import { newBetActions } from "../../store/NewBet";

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
} from "./styles";
import { cartActions } from "../../store/Cart";

let cartArr: any[] = [];

type RootState = {
  newBet: {
    items: number[];
    color: string;
  };
  cart: {
    cartItem: {}[];
    displayCart: boolean;
  };
};

export function NewBet() {
  const dispatch = useDispatch();

  let gameNumber: number[] = useSelector(
    (state: RootState) => state.newBet.items
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

  useEffect(() => {
    api.get("/games").then((res) => setItems(res.data));
  }, []);

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
    gameId: number,
  ) {
    if (numbersGame.length !== maxNumber) {
      
      return;
    }

    dispatch(cartActions.receiveGame({ numbersGame, price, type, color, gameId }));
    clearGame();
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

  return (
    <Container>
      <>
        <Header cartActive={gameNumber.length >= 1 && true} />
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
                  background={type === item.type ? item.color : "transparent"}
                  color={price !== item.price ? item.color : "transparent"}
                  title={`${item.type}`}
                >
                  {item.type}
                </Game>
              </GameContainer>
            ))}
        </TypeGameContainer>
        <DescriptionContainer top={showBetNumbers}>
          {showBetNumbers && (
            <>
              {gameNumber && gameNumber.length <= 0 && (
                <DescriptionAnimatedContainer
                  animation="fadeInDown"
                  duration={800}
                >
                  <FillYourBetText>Fill your bet</FillYourBetText>
                  <DescriptionText>{description}</DescriptionText>
                </DescriptionAnimatedContainer>
              )}

              <Animatable.View
                animation="fadeIn"
                duration={800}
              >
                <BetNumberSelectedContainer
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >
                  {gameNumber &&
                    gameNumber.length >= 1 &&
                    gameNumber.map((value: number) => (
                      <BetNumber
                        key={value }
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
                        <AntDesign name="close" size={12} color="white" />
                      </BetNumber>
                    ))}
                </BetNumberSelectedContainer>
              </Animatable.View>
              {gameNumber && gameNumber.length >= 1 && (
                <ButtonContainer animation="fadeInUp" duration={800}>
                  <ActionButton onPress={() => completeGame(maxNumber, range)}>
                    <ActionButtonText>Complete Game</ActionButtonText>
                  </ActionButton>
                  <ActionButton onPress={clearGame}>
                    <ActionButtonText>Clear Game</ActionButtonText>
                  </ActionButton>
                  <AddToCartButton onPress={() => onAddToCart(gameNumber, price, type, color, maxNumber, gameId)}>
                    <MaterialIcons
                      name="shopping-cart"
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
            </>
          )}
          <BarContainer>
            <Bar />
          </BarContainer>
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
      </>
    </Container>
  );
}
