import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useMessagesContext } from '../hooks/useMessagesContext';

export const MessageDetails = ({ message }) => {
  const { dispatch } = useMessagesContext();

  const handleDelete = async () => {
    const res = await fetch('api/messages/' + message._id, {
      method: 'DELETE',
    });
    const json = await res.json();

    if (res.ok) {
      dispatch({ type: 'DELETE_MESSAGE', payload: json });
    }
  };

  return (
    <div className='message-details'>
      <h4>{message.title}</h4>
      <p>
        <strong>Description:</strong> {message.description}
      </p>
      <p>{formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}</p>
      <span className='material-symbols-outlined' onClick={handleDelete}>
        delete
      </span>
    </div>
  );
};
