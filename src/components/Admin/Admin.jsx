/// MUI Imports:
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// MUI Delete Icon:
import IconButton from '@mui/material/IconButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import { useEffect, useState } from 'react';
import axios from 'axios';






export default function Admin(){
    const [feedback, setFeedback] = useState([]);

    useEffect(()=> {
        renderFeedback();
    }, []);

    // GET request:
    const renderFeedback = ()=> {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(response => {   
            console.log(response.data);
            // example data: 
            // {
            //     id: 1,
            //     feeling: 4,
            //     understanding: 4,
            //     support: 5,
            //     comments: 'Doing Great!',
            //     flagged: false,
            //     date: 2022-09-25T05:00:00.000Z
            //   }
            setFeedback(response.data);
        }).catch(error => {
            console.log('Error in GET /feedback:', error);
        })
    }
    
    // console.log(feedback);


    // DELETE request:
    const deleteFeedback = (id)=> {
        console.log(id); // 1
        axios({
            method: 'DELETE',
            url: `/feedback/${id}`
        })
        .then(response => {
            renderFeedback();
        }).catch( error => {
            console.log('Error in DELETE /feedback', error)
        })
    }

    return (
        <div >
            <h2>Feedback Results</h2>
            <div className="table">
                <TableContainer component={Paper}>
                    <Table size="small" sx={{ minWidth: 650, overflow: "hidden"}} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell padding="none" align="center">Feeling</TableCell>
                            <TableCell padding="none" align="center">Comprehension</TableCell>
                            <TableCell padding="none" align="center">Support</TableCell>
                            <TableCell padding="none" align="center">Comments</TableCell>
                            <TableCell padding="none" align="center">Delete</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {feedback.map((row) => (
                                <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell padding="none" align="center" component="th" scope="row">{row.feeling}</TableCell>
                                <TableCell padding="none" align="center">{row.understanding}</TableCell>
                                <TableCell padding="none" align="center">{row.support}</TableCell>
                                <TableCell padding="none" align="center">{row.comments}</TableCell>
                                <TableCell padding="none" align="center">
                                    <IconButton onClick={()=> {
                                        deleteFeedback(row.id);
                                    }}>
                                    <DeleteForeverOutlinedIcon />
                                    </IconButton>
                                </TableCell>
                                </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}