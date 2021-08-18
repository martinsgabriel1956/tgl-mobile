import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './Cart';
import { newBetSlice } from './NewBet';

export const store = configureStore({
  reducer: {
    newBet: newBetSlice.reducer,
    cart: cartSlice.reducer,
  }
})