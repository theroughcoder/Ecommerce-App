import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "../actions/productAction";
// Retrieving the string
let retString = localStorage.getItem("cart")

// Retrieved array
let cartArr = JSON.parse(retString)
const INITIAL_STATE = { cart: cartArr ? cartArr : [] };

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
   
    case ADD_TO_CART:
      let cart = state.cart.findIndex(e => action.payload.id == e.id)
      if(cart != -1){
        let cartArr = state.cart;
        cartArr[cart].qty++; 
        localStorage.setItem("cart", JSON.stringify([...cartArr]));
        return { ...state, cart: [...cartArr] };
      }else{
        
        localStorage.setItem("cart", JSON.stringify([...state.cart, {...action.payload, qty : 1 }]));
        return { ...state, cart: [...state.cart, {...action.payload, qty : 1 }] };
      }

      case REMOVE_FROM_CART:
      // console.log("fd")
      if(state.cart[action.payload.i].qty > 1 && action.payload.dec){
        let cart = state.cart;
        cart[action.payload.i].qty--;
        localStorage.setItem("cart", JSON.stringify(cart));
        return { ...state, cart: cart};
      }else{
        let cart = state.cart;
        cart.splice(action.payload.i, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        return { ...state, cart: cart };
      }
   
    default:
      return state;
  }
};
