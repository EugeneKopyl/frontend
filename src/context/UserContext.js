import React from 'react';
import { createContext, useReducer } from 'react';

export const UserContext = createContext();

export const usersReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        users: action.payload,
      };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, {
    users: null,
  });

  return <UserContext.Provider value={{ ...state, dispatch }}>{children}</UserContext.Provider>;
};
