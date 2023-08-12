import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { StyledContainer, StyledPaper, StyledTextField, StyledButton } from './App.style';

import {Dashboard} from './Dashboard';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <StyledContainer>
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
    </StyledContainer>
  );
}
