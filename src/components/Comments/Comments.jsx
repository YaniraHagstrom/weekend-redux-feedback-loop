// MUI imports:
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormControl } from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

export default function Comments(){
    const [comment, setComment] = useState('');

    const handleComment = (e)=> {
        setComment(e.target.value)
    }
    // console.log(comment);

    const dispatch = useDispatch();
    const submitComment = ()=> {
        const action = {
            type: 'UPDATE_COMMENT',
            payload: comment
        }
        // console.log(action);
        dispatch(action);
    }

    return(
        <>
            <Header /> 
            <h2>Would you like to leave a comment?</h2>
            <div id='comment'>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                    >
                    <TextField fullWidth 
                    label="Comment" 
                    id="fullWidth" 
                    value={comment}
                    onChange={handleComment}
                    />
                </Box>
            </div>
            <Link to='/review'>
                <Button variant="outlined" onClick={submitComment}>Next</Button>
            </Link>
        </>

    );
}