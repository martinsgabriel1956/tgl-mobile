import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";

type ItemsType = {
  cartItem: {}[];
  cartItemFiltered: {}[];
};

type ActionType = {
  game: {}[];
  gameType?: string;
};

const initialState: ItemsType = {
  cartItem: [],
  cartItemFiltered: [],
};

export const gamesSlice = createSlice({
  name: "Games",
  initialState,
  reducers: {
    gamesDataFromCart(state, action) {
      const { game }: ActionType = action.payload;

      const token = AsyncStorage.getItem("token");

      api.post(
        "/bets",
        { bets: game },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      state.cartItem.push({ game });
      console.log(game);
    },
  },
});

export const gamesActions = gamesSlice.actions;
