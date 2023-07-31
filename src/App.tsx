import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Messages } from './pages/Messages';
import { Login } from './pages/Login';
import MainNav from './components/MainNav';
import { Register } from './pages/Register';
import { myAuthContext } from './context/AuthContext';
import { AdminPage } from './pages/Admin';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  const ctx = useContext(myAuthContext);

  return (
    <div className='App'>
      <BrowserRouter>
        <MainNav></MainNav>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            {ctx ? (
              <>
                <Route path='/messages' element={<Messages />} />
                <Route path='/profile' element={<ProfilePage />} />
                {ctx.isAdmin ? <Route path='/admin' element={<AdminPage />} /> : null}
              </>
            ) : (
              <>
                <Route path='/login-page' element={<Login />} />
                <Route path='/register' element={<Register />} />
              </>
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
