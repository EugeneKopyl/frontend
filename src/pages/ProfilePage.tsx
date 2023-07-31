import React, { useContext } from 'react';
import { myAuthContext } from '../context/AuthContext';

export const ProfilePage = () => {
  const ctx = useContext(myAuthContext);

  return (
    <div className='home'>
      <h1>Profile:</h1>
      <p>{ctx.username}</p>
    </div>
  );
};
