import { styled } from '@mui/system';
import { Paper } from '@mui/material';

export const StyledPaper = styled(Paper)({
  padding: '16px',
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
});

export const StyledDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: 'auto',
  background: 'linear-gradient(to right bottom, #93E9BE, #EEFFFF)',
});
