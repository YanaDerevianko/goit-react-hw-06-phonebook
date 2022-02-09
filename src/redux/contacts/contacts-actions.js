import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", ({ name, number }) => {
  return {
    payload: {
      id: shortid.generate(),
      name: name,
      number: number,
    },
  };

});

const deleteContact = createAction("contacts/delete");

const changeFilter = createAction("contacts/changeFilter");

export default { addContact, deleteContact, changeFilter };
