import { styled } from '@mui/system';
import { Paper, TextField, Button } from '@mui/material';

export const StyledDiv = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: 'auto',
    background: 'linear-gradient(to right bottom, #93E9BE, #EEFFFF)',
  });
  
export const StyledPaper = styled(Paper)({
    padding: '16px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  });
  
export const StyledTextField = styled(TextField)({
    margin: '8px',
    width: '100%',
  });
  
export const StyledButton = styled(Button)({
    margin: '16px 0',
  });