import React from 'react';
import { Container, Typography } from '@mui/material';
import {StyledContainer, StyledPaper, StyledButton} from './Dashboard.style'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface DashboardProps {
  onLogout: () => void;
}

function createData(
  songname: string,
  artist: string,
  album: string,
  listens: number,
) {
  return { songname, artist, album, listens };
}

const rows = [
  createData('Mona Lisas', 'Marren Morris', 'the restoration', 200),
  createData('Do You Remember', 'Jack Johnson', 'Home', 150),
  createData('Shadow People', 'Dr. Dog', 'Shame Shame', 100),
  createData('Girl From the North Country', 'Bob Dylan', 'The Freewheelin', 80),
  createData('When I Paint My Masterpiece', 'Grateful Dead', 'Nassua Coliseum', 65),
];

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <StyledContainer>
      <Container component="main" maxWidth="xs">
        <StyledPaper elevation={3}>
          <TableContainer component={StyledPaper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Song Name</TableCell>
                  <TableCell align="right">Artist</TableCell>
                  <TableCell align="right">Album&nbsp;(g)</TableCell>
                  <TableCell align="right">Listens&nbsp;(g)</TableCell>        
                </TableRow>
              </TableHead>
            <TableBody>
              {rows.map((row) => (
              <TableRow
                key={row.songname}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               >
                <TableCell component="th" scope="row">
                  {row.songname}
                </TableCell>
                <TableCell align="right">{row.artist}</TableCell>
                <TableCell align="right">{row.album}</TableCell>
                <TableCell align="right">{row.listens}</TableCell>
             </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          <StyledButton variant="contained" color="primary" onClick={onLogout} fullWidth>
            Logout
          </StyledButton>
        </StyledPaper>
      </Container>
    </StyledContainer>
  );
};
