import { createSlice } from "@reduxjs/toolkit";

type NewBetProps = {
  items: number[];
  price: number;
  type: string;
  isNewBet: boolean
};

type ActionTypes = {
  value: number;
  maxNumber: number;
  range: number;
};

const initialState: NewBetProps = {
  items: [],
  price: 0,
  type: "",
  isNewBet: false
};

export const newBetSlice = createSlice({
  name: "newBet",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { value, maxNumber }: ActionTypes = action.payload;
      const { items } = state;

      const gameNumbers = items;

      const existingNumber = gameNumbers.find((item) => item === value);
      const almostAddNumberInCart = gameNumbers.length < maxNumber;

      if (!existingNumber && almostAddNumberInCart) gameNumbers.push(value);
      if (existingNumber) gameNumbers.splice(gameNumbers.indexOf(value), 1);
    },
    clearGame(state) {
      state.items = [];
      state.price = 0;
      state.type = "";
    },
    completeGame(state, action) {
      const { maxNumber, range }: ActionTypes = action.payload;
      const { items } = state;

      const gameNumbers = items;

      while (gameNumbers.length < maxNumber) {
        let newItem = Math.ceil(Math.random() * range + 1);
        const matchNumber = gameNumbers.find((item) => item === newItem);

        if (!matchNumber) gameNumbers.push(newItem);
      }
    },
  }
});

export const newBetActions = newBetSlice.actions;