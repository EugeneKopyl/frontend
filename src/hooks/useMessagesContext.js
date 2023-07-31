import { useContext } from 'react';
import { MessageContext } from '../context/MessgeContext';

export const useMessagesContext = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw Error('useMessageContext must be used inside an MessagesContextProvider');
  }

  return context;
};
