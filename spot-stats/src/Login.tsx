import { Typography } from '@mui/material';
import { StyledTextField, StyledButton } from './App.style';
import { StyledPaper, StyledDiv } from './Login.style';
import { Container } from '@mui/system';

interface LoginProps {
  onLogin: () => void;
}

// TODO: center login button
export const Login: React.FC<LoginProps> = ({ onLogin }) => (
  <StyledDiv>
    <StyledPaper elevation={3}>
      <Container component="main" maxWidth="xs">
        <Typography variant="h5">Login</Typography>
        <StyledTextField label="Username" variant="outlined" required />
        <StyledTextField label="Password" variant="outlined" type="password" required />
        <StyledButton variant="contained" color="primary" fullWidth onClick={onLogin}>
          Login
        </StyledButton>
      </Container>
    </StyledPaper>
  </StyledDiv>
);
