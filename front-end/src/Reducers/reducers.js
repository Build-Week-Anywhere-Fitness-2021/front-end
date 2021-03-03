//IMPORTS START

import React from "react";
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CREATE_CLASS,
  UPDATE_CLASS,
  DELETE_CLASS
} from "../Actions/actions";

//IMPORTS END

//INITIAL STATE START

export const initialState = {
  name: "",
  type: "",
  startTime: "",
  duration: "",
  intensityLevel: "",
  location: "",
  registered: "",
  maxRegistered: "",
  date: "",
  id: "",
  isRegistered: false,
  isLoggedIn: false
};

//INITIAL STATE END

//REDUCER BEGINS

export const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
        isLoggedIn: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistered: false,
        isLoggedIn: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isRegistered: true,
        isLoggedIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isRegistered: true,
        isLoggedIn: false
      };
    case CREATE_CLASS:
      return {
        ...state,
        name: action.payload.name,
        type: action.payload.type,
        startTime: action.payload.startTime,
        duration: action.payload.duration,
        intensityLevel: action.payload.intensityLevel,
        location: action.payload.location,
        registered: action.payload.registered,
        maxRegistered: action.payload.maxRegistered,
        id: action.payload.id,
        isRegistered: true,
        isLoggedIn: true
      };
    case UPDATE_CLASS:
      return {
        ...state,
        name: action.payload.name,
        type: action.payload.type,
        startTime: action.payload.startTime,
        duration: action.payload.duration,
        intensityLevel: action.payload.intensityLevel,
        location: action.payload.location,
        registered: action.payload.registered,
        maxRegistered: action.payload.maxRegistered,
        id: action.payload.id,
        isRegistered: true,
        isLoggedIn: true
      };
    case DELETE_CLASS:
      return {
        ...state,
        name: "",
        type: "",
        startTime: "",
        duration: "",
        intensityLevel: "",
        location: "",
        registered: "",
        maxRegistered: "",
        id: "",
        isRegistered: true,
        isLoggedIn: true
      };
    default:
      return state;
  }
};
