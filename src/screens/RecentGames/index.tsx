import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Bet } from "../../components/UI/Bet";
import { Bets } from "../../components/UI/Cart/styles";
import { Game } from "../../components/UI/Game";

import { Header } from "../../components/UI/Header";
import { ItemTypes } from "../../interfaces/ItemTypes";
import { api } from "../../services/api";
import { GameContainer } from "../NewBet/styles";

import {
  Container,
  RecentGamesText,
  TypeGameContainer,
  Filters,
  BetsContainer,
  CloseContainer,
} from "./styles";

export function RecentGames() {
  const [items, setItems] = useState([]);
  const [token, setToken] = useState("");
  const [page, setPage] = useState(1);
  const [gamesFiltered, setGamesFiltered] = useState([]);
  const [gamesSelected, setGamesSelected] = useState([10]);
  const [games, setGames] = useState([]);

  async function getDate() {
    const user = await AsyncStorage.getItem("token");

    setToken(user!);
  }

  function filterGamesHandler(id: number, page: number) {
    if (gamesSelected.indexOf(id) === -1) {
      setGamesSelected((prev) => prev.concat(id));

      api
        .get(`/bets?page=${page}&listNumber=10`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setGamesFiltered((prev) =>
            prev.concat(
              res.data.data.filter((games: any) => games.games.id === id)
            )
          );
        })
        .catch((err) => err.message);
      return;
    }

    setGamesFiltered(
      (prev) => (prev = prev.filter((games: any) => games.games.id !== id))
    );
    setGamesSelected((prev) => (prev = prev.filter((item) => item !== id)));
  }

  useEffect(() => {
    getDate();
    api.get("/games").then((res) => setItems(res.data));
    api
      .get(`/bets?page=${page}&listNumber=12`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGames(res.data.data);
      });
  }, [items]);

  return (
    <Container>
      <Header />
      <RecentGamesText>Recent Games</RecentGamesText>
      <Filters>Filters</Filters>
      <TypeGameContainer horizontal showsHorizontalScrollIndicator={false}>
        {items &&
          items.map((item: ItemTypes, index: number) => (
            <GameContainer key={index}>
              <Game
                key={index}
                background={
                  gamesSelected.find((id) => id === item.id)
                    ? item.color
                    : "#fff"
                }
                border={item.color}
                onPress={() => filterGamesHandler(item.id, page)}
                color={
                  gamesSelected.find((id) => id === item.id)
                    ? "#fff"
                    : item.color
                }
              >
                {item.type}
              </Game>
              {gamesSelected.find((id) => id === item.id) && (
                <CloseContainer>
                  <AntDesign name="close" size={14} color="white" />
                </CloseContainer>
              )}
            </GameContainer>
          ))}
      </TypeGameContainer>
      <BetsContainer>
        {gamesFiltered.length === 0 &&
          games.map((item: any, index: number) => (
            <Bets>
              <Bet
                key={index}
                numbers={item.numbers}
                type={item.games.type}
                color={item.games.color}
                date={item.date_string}
                price={item.total_price}
                inHomePage={true}
              />
            </Bets>
          ))}

        {gamesFiltered &&
          gamesFiltered.map((item: any, index: number) => (
            <Bets>
              <Bet
                key={index}
                numbers={item.numbers}
                type={item.games.type}
                color={item.games.color}
                date={item.date_string}
                price={item.total_price}
                inHomePage={true}
              />
            </Bets>
          ))}
      </BetsContainer>
    </Container>
  );
}
