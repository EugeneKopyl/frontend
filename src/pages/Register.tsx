import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    axios({
      method: 'POST',
      data: {
        username,
        password,
      },
      withCredentials: true,
      url: 'https://backend-production-1f67.up.railway.app/auth/register',
      // url: 'http://localhost:4000/auth/register',
    }).then((res: AxiosResponse) => {
      if (res.statusText === 'OK') {
        window.location.href = '/login-page';
      }
    });
  };

  return (
    <div className='register'>
      <h1>Register</h1>
      <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)} />
      <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={register}>Submit</button>
    </div>
  );
};
