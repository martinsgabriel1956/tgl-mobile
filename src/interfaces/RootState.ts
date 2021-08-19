export interface RootState {
  newBet: {
    items: number[];
    color: string;
  };
  cart: {
    cartItem: {}[];
    showCart: boolean;
  };
}
