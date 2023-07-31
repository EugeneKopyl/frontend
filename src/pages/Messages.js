import React from 'react';
import { useEffect } from 'react';
import { MessageDetails } from '../components/MessageDetails';
import { useMessagesContext } from '../hooks/useMessagesContext';
import MessageForm from '../components/MessageForm';

export const Messages = () => {
  const { messages, dispatch } = useMessagesContext();

  useEffect(() => {
    const fetchMessages = async () => {
      // const res = await fetch('http://localhost:4000/api/messages');
      const res = await fetch('https://backend-production-1f67.up.railway.app/api/messages');
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: 'GET_MESSAGES', payload: json });
      }
    };
    fetchMessages();
  }, [dispatch]);

  return (
    <div className='messages'>
      <div className='container'>
        {messages &&
          messages.map((message) => <MessageDetails key={message._id} message={message} />)}
      </div>
      <MessageForm />
    </div>
  );
};
