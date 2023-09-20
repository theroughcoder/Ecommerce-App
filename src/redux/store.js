const redux = require("redux");
const {productReducer } = require("./reducers/productReducer");

export const store = redux.createStore(productReducer);