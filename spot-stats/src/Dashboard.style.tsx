import { styled } from '@mui/system';
import { Paper, Button } from '@mui/material';


export const StyledContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right bottom, #8e24aa, #3949ab)',
  });
  
export const StyledPaper = styled(Paper)({
    padding: '16px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  });
  
export const StyledButton = styled(Button)({
    margin: '16px 0',
  });