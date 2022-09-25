// MUI imports:
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormControl } from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

export default function Comments(){
    const commentReducer = useSelector(store=> store.commentsReducer)
    // This retains the comment text in the input until   the feedback is submitted.
    useEffect(() => {
        if (commentReducer !== ''){
            setComment(localStorage.getItem("inputValue"));
        }
    }, []);
    
    const [comment, setComment] = useState('');

    const handleComment = (e)=> {
        setComment(e.target.value)
        localStorage.setItem("inputValue", e.target.value)
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
            <div>
                <Link to='/supported'>
                    <Button variant="outlined">back</Button>
                </Link>
                <Link to='/review'>
                    <Button variant="outlined" onClick={submitComment}>Next</Button>
                </Link>
            </div>
        </>

    );
}