import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersLeaderBoard } from '../../store/slices/yugioh';

export const Leaderboard = () => {


  const {usersleaderboard} = useSelector( state => state.leaderBoard);
  const dispatch = useDispatch();

  const orderLeaderBoard = (data = []) => {
        const orderedLeaderboard = [...usersleaderboard].sort((a,b) => b.score - a.score);
        return orderedLeaderboard;
  }

  useEffect(() => {
     dispatch(getUsersLeaderBoard());
  }, [])
  
  return (
    <>
    <Grid2 container sx={{mt:3,justifyContent:'center'}}>
        <Grid2 size={4}>

            <TableContainer component={Paper}>
                <Table  aria-label="Leaderboard table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Points</TableCell>
                        
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderLeaderBoard(usersleaderboard).map((row) => (
                            <TableRow
                                key={row.uid}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.displayName}
                                </TableCell>
                                <TableCell align="right">{row.score}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid2>
        
    </Grid2>
        
    
    </>
  )
}
