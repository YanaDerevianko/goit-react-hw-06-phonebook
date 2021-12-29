import { combineReducers } from "redux";
import types from "./contacts-types";

// const items = (state=[], action) => {
//   return state
// }
// const filter = (state='', action) => {
//   return state
// }
const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;
    default:
      return state;
  }
};


export default combineReducers({
    items,
    filter,
  });