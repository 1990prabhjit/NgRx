import { createReducer, on } from "@ngrx/store";
import { addToCart, removeCart } from "./cart.actions";

export const initialState = 0;
export const cartReducer = createReducer(
    initialState, 
    on(addToCart, (state, prop) => {
        console.log('Props >>>', prop)
        return state + 1
    }),
    on(removeCart, state => state - 1)
)