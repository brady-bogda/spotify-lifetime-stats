import { styled } from '@mui/system';
import { Paper, TextField, Button } from '@mui/material';

export const StyledDiv = styled('div')({
  display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  height: '100vh',
  width: 'auto',
  background: 'linear-gradient(to right bottom, #93E9BE, #EEFFFF)',
});

export const StyledTextField = styled(TextField)({
  margin: '8px',
  width: '100%',
});

export const StyledButton = styled(Button)({
  margin: '16px 0',
});
