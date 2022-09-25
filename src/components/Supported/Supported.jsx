// MUI imports:
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"

import Header from '../Header/Header';

export default function Supported(){
    const [supported, setSupported] = useState(0);
    const [url, setUrl] = useState('/supported')
    // console.log(supported);

    const dispatch = useDispatch();

    const submitSupported = ()=> {
        console.log(supported);
        if (supported === 0){
            alert('Please select a value.');
        }
        else {
            const action = {
                type: 'UPDATE_SUPPORTED',
                payload: supported
            }
            dispatch(action);
        }
    }
    
    const handleRating = (e)=> {
        setUrl('/comments');
        setSupported(e.target.value);
    }
    // console.log(supported);

    return(
        <>
            <Header /> 
            <div>
                <h2>Are you feeling supported?</h2>
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
                        value={supported}
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
            <Link to={url}>
                <Button variant="outlined" onClick={submitSupported}>Next</Button>
            </Link>
        </>
    );
}