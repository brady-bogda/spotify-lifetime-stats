import React from 'react';
import { Container, Typography } from '@mui/material';
import {StyledContainer, StyledPaper, StyledButton} from './Dashboard.style'

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
