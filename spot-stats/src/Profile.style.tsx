import { styled } from '@mui/system';
import { Paper, Button } from '@mui/material';

export const StyledContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'auto',
  width: 'auto',
  background: 'linear-gradient(to right bottom, #93E9BE, #3949ab)',
});

export const StyledPaper = styled(Paper)({
  padding: '16px',
  width: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
});

export const StyledButton = styled(Button)({
  margin: '16px 0',
});

export const StyledDiv = styled('div')({
  display: 'flex',
  // height: '80vh',
  // width: '100vh',
  background: 'linear-gradient(to right bottom, #93E9BE, #EEFFFF)',
});
