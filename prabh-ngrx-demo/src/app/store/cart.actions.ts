import { createAction, props } from "@ngrx/store";


export const addToCart = createAction('[Item] Add to Cart', props);
export const removeCart = createAction('[Item] Remove from Cart');