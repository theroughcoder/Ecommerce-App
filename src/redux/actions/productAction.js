export const ADD_TO_CART = "add to cart";
export const REMOVE_FROM_CART = "remove from cart";

// action creators
export const addToCart = (cart) => ({ type: ADD_TO_CART, payload: cart });
export const removeFromCart = (cart, dec) => ({ type: REMOVE_FROM_CART, payload: {i : cart, dec} });