import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";
import types from "./contacts-types";


// const addContact = createAction(types.ADD, ({name, number}) => {
//   return {
//     payload: {
//       id: shortid.generate(),
//       name: name,
//       number: number,
//     },
//   };
// });

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },




});
// const deleteContact = createAction(types.DELETE);
const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId
})

// const changeFilter = createAction(types.FILTER);
 const changeFilter = text => ({
  type: types.FILTER,
  payload: text

 })
export default { addContact, deleteContact, changeFilter };
