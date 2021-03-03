import React from "react";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const CREATE_CLASS = "CREATE_CLASS";
export const UPDATE_CLASS = "UPDATE_CLASS";
export const DELETE_CLASS = "DELETE_CLASS";

export const registerSuccess = (regCred) => {
  return { type: REGISTER_SUCCESS, payload: regCred };
};

export const registerFailure = () => {
  return { type: REGISTER_FAILURE };
};

export const loginSuccess = () => {
  return { type: LOGIN_SUCCESS };
};

export const loginFailure = () => {
  return { type: LOGIN_FAILURE };
};

export const createClass = (classObject) => {
  return { type: CREATE_CLASS, payload: classObject };
};

export const updateClass = (newClass) => {
  return { type: UPDATE_CLASS, payload: newClass };
};

export const deleteClass = () => {
  return { type: DELETE_CLASS };
};
