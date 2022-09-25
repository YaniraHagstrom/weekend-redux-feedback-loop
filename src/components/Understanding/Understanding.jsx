// MUI imports:
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import Header from '../Header/Header';

export default function Understanding(){
    const [understanding, setUnderstanding] = useState(0);
    const [url, setUrl] = useState('/understanding')
    // console.log(understanding);

    const dispatch = useDispatch();

    const alertUser = () => {
        alert('Please select a value.');
    }

    const submitUnderstanding = ()=> {
        console.log(understanding);
        if (understanding === 0){
            alert('Please select a value.');
        }
        else {
            const action = {
                type: 'UPDATE_UNDERSTANDING',
                payload: understanding
            }
            dispatch(action);
        }
    }
    
    const handleRating = (e)=> {
        setUrl('/supported');
        setUnderstanding(e.target.value);
    }
    // console.log(understanding);

    return(
        <>
            <Header /> 
            <div>
                <h2>How well are you understanding the content?</h2>
                <FormControl>
                    {/* <div>
                        <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
                        <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
                    </div> */}
                    <RadioGroup
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name="controlled-radio-buttons-group"
                        defaultValue="top"
                        value={understanding}
                        onChange={handleRating}
                        >
                        <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="1"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label="2"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="3"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        value="4"
                        control={<Radio />}
                        label="4"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        value="5"
                        control={<Radio />}
                        label="5"
                        labelPlacement="bottom"
                        />
                        
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <Link to='/'>
                    <Button variant="outlined">back</Button>
                </Link>
                <Link to={url}>
                    <Button variant="outlined" onClick={submitUnderstanding}>Next</Button>
                </Link>
            </div>
        </>
    );
}