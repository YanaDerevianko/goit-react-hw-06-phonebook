import propTypes from "prop-types";
import React from "react";
import { FilterContact } from "./Filter.styled";
import { useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = (e) => {
    dispatch(contactsActions.changeFilter(e.target.value));
  };
  return (
    <>
      <p>Find contacts by name: </p>
      <FilterContact type="text" name="filter" onChange={changeFilter} />
    </>
  );
};
