import React from 'react';
import { styled } from '@mui/system';
import { Container, Paper, Button, Typography } from '@mui/material';

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

const StyledButton = styled(Button)({
  margin: '16px 0',
});

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <StyledContainer>
      <Container component="main" maxWidth="xs">
        <StyledPaper elevation={3}>
          <Typography variant="h5">Dashboard</Typography>
          <Typography variant="body1" style={{ margin: '16px 0' }}>
            You are now logged in.
          </Typography>
          <StyledButton variant="contained" color="primary" onClick={onLogout} fullWidth>
            Logout
          </StyledButton>
        </StyledPaper>
      </Container>
    </StyledContainer>
  );
};
