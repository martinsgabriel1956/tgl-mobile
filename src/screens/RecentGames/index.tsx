import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Bet } from "../../components/Bet";
import { Bets } from "../../components/Cart/styles";
import { Game } from "../../components/UI/Game";
import { Header } from "../../components/UI/Header";
import { GameContainer } from "../NewBet/styles";

import { ItemTypes } from "../../interfaces/ItemTypes";
import { api } from "../../services/api";

import {
  Container,
  RecentGamesText,
  TypeGameContainer,
  Filters,
  BetsContainer,
  CloseContainer,
  FilteredButtonsContainer,
  PrevButton,
  NextButton,
  FilteredContainer,
  NumberPage,
} from "./styles";

import colors from "../../utils/colors";

export function RecentGames() {
  const [items, setItems] = useState([]);
  const [token, setToken] = useState("");
  const [lastPage, setLastPage] = useState();
  const [meta, setMeta] = useState({ current_page: 1, last_page: 1 });
  const [page, setPage] = useState(1);
  const [gamesFiltered, setGamesFiltered] = useState([]);
  const [gamesSelected, setGamesSelected] = useState([10]);
  const [games, setGames] = useState([]);

  async function getDate() {
    const user = await AsyncStorage.getItem("token");

    setToken(user!);
  }

  function nextPage() {
    if (page !== lastPage) {
      setGamesFiltered([]);
      setPage((page) => page + 1);
    }
  }

  function prevPage() {
    if (page !== 1) {
      setGamesFiltered([]);
      setPage((page) => page - 1);
    }
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
    api
      .get("/games")
      .then((res) => setItems(res.data))
      .catch((err) => err.message);
    api
      .get(`/bets?page=${page}&listNumber=10`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGames(res.data.data);
        setLastPage(res.data.meta.last_page);
        setMeta(res.data.meta);
      })
      .catch((err) => err.message);
  }, [items]);

  return (
    <Container>
      <Header />
      <RecentGamesText>Recent Games</RecentGamesText>
      <FilteredContainer>
        <Filters>Filters</Filters>
        {gamesFiltered && (
          <FilteredButtonsContainer>
            <PrevButton onPress={() => prevPage()}>
              <AntDesign name="doubleleft" size={28} color={colors.primary} />
            </PrevButton>
            <NumberPage>
              {meta.current_page} / {lastPage}
            </NumberPage>
            <NextButton onPress={() => nextPage()}>
              <AntDesign name="doubleright" size={28} color={colors.primary} />
            </NextButton>
          </FilteredButtonsContainer>
        )}
      </FilteredContainer>
      <TypeGameContainer horizontal showsHorizontalScrollIndicator={false}>
        {items &&
          items.map((item: ItemTypes, index: number) => (
            <GameContainer key={index}>
              <Game
                key={index}
                background={
                  gamesSelected.find((id) => id === item.id)
                    ? item.color
                    : "transparent"
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
            <Bets key={index}>
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
