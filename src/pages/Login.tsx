import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Button from 'react-bootstrap/Button';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    axios
      .post(
        // 'http://localhost:4000/auth/login',
        'https://backend-production-1f67.up.railway.app/auth/login',
        {
          username,
          password,
        },
        {
          withCredentials: true,
        },
      )
      .then((res: AxiosResponse) => {
        console.log("-----res-----", res)
        if (res.statusText === 'OK') {
          window.location.href = '/';
        }
      })
      .catch((err) => console.log(err));
  };

  const loginGoogle = () => {
    // window.open('http://localhost:4000/auth/google', '_self');
    window.open('https://backend-production-1f67.up.railway.app/auth/google', '_self');
  };

  return (
    <div className='login'>
      <div>
        <h1>Login</h1>
        <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)} />
        <input
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant='secondary' onClick={login}>
          Submit
        </Button>
        <br />
        <br />
        <div className='google-btn' onClick={loginGoogle}>
          <div className='google-icon-wrapper'>
            <img
              alt="google-logo"
              className='google-icon'
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
            />
          </div>
          <p className='btn-text'>
            <b>Sign in with google</b>
          </p>
        </div>
      </div>
    </div>
  );
};
