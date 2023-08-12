import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { Routes, Route, Navigate, redirect, useNavigate } from 'react-router-dom';
import { StyledDiv } from './App.style';

import { Login } from './Login';
import { Profile } from './Profile';
import { Header } from './Header';
import { Footer } from './Footer';
import { Feed } from './Feed';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/profile');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />}></Route>
        <Route
          path="/profile"
          element={true ? <Profile onLogout={handleLogout} /> : <Navigate to="/" />}
        />
        <Route path="/feed" element={<Feed />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};
