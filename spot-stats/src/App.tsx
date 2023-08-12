import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { Routes, Route, Navigate, redirect, useNavigate } from 'react-router-dom';
import { StyledDiv, StyledPaper, StyledTextField, StyledButton } from './App.style';

import {Dashboard} from './Dashboard';
import { Header } from './Header';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div>
    <Header></Header>
    <StyledDiv>
      <Container component="main" maxWidth="xs">
        <StyledPaper elevation={3}>
          <Routes>
              <Route path="/dashboard" element={true ? <Dashboard onLogout={handleLogout}/> : <Navigate to="/" />}/>
              <Route path="/" element={
                <div>
                <Typography variant="h5">Login</Typography>
                <StyledTextField label="Username" variant="outlined" required />
                <StyledTextField label="Password" variant="outlined" type="password" required />
                <StyledButton variant="contained" color="primary" fullWidth onClick={handleLogin}>
                  Login
                </StyledButton>
                </div>

              }>
              </Route>
          </Routes>
        </StyledPaper>
      </Container>
    </StyledDiv>
    </div>
  );
}
