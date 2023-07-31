import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { MessageContextProvider } from './context/MessgeContext';
import { UserContextProvider } from './context/UserContext';
import AuthContext from './context/AuthContext';

// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <AuthContext>
      <UserContextProvider>
        <MessageContextProvider>
          <App />
        </MessageContextProvider>
      </UserContextProvider>
    </AuthContext>
  </React.StrictMode>,
);
