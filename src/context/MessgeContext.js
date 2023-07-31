import React from 'react';
import { createContext, useReducer } from 'react';

export const MessageContext = createContext();

export const messagesReducer = (state, action) => {
  switch (action.type) {
    case 'GET_MESSAGES':
      return {
        messages: action.payload,
      };
    case 'CREATE_MESSAGE':
      return {
        messages: [action.payload, ...state.messages],
      };
    case 'DELETE_MESSAGE':
      return {
        messages: state.messages.filter((m) => m._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const MessageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messagesReducer, {
    messages: null,
  });

  return (
    <MessageContext.Provider value={{ ...state, dispatch }}>{children}</MessageContext.Provider>
  );
};
