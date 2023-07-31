import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { myAuthContext } from '../context/AuthContext';
import Axios, { AxiosResponse } from 'axios';

export default function MainNav() {
  const ctx = useContext(myAuthContext);
  const logout = () => {
    Axios.get('https://backend-production-1f67.up.railway.app/auth/logout', {
    // Axios.get('http://localhost:4000/auth/logout', {
      withCredentials: true,
    }).then((res: AxiosResponse) => {
      if (res.statusText === 'OK') {
        window.location.href = '/';
      }
    });
  };

  return (
    <Navbar bg='dark' data-bs-theme='dark' expand='lg' className='bg-body-tertiary'>
      <Container className='justify-content-end'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='justify-content-end'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            {ctx ? (
              <>
                <Nav.Link as={Link} to='/messages'>
                  Messages
                </Nav.Link>
                <Nav.Link onClick={logout} as={Link} to='/loguot'>
                  Logout
                </Nav.Link>
                {ctx.isAdmin ? (
                  <Nav.Link as={Link} to='/admin'>
                    Admin
                  </Nav.Link>
                ) : null}
                <Nav.Link as={Link} to='/profile'>
                  Profile
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to='/register'>
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to='/login-page'>
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
