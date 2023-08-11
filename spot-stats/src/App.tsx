import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

import {Dashboard} from './Dashboard';

const StyledContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: 'linear-gradient(to right bottom, #8e24aa, #3949ab)',
});

const StyledPaper = styled(Paper)({
  padding: '16px',
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
});

const StyledTextField = styled(TextField)({
  margin: '8px',
  width: '100%',
});

const StyledButton = styled(Button)({
  margin: '16px 0',
});

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
              <Route path="/dashboard" element={isLoggedIn ? <Dashboard onLogout={handleLogout}/> : <Navigate to="/" />}/>
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
