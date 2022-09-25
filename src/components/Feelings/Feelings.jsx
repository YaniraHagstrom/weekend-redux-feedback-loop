// MUI imports:
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Feelings(){
    const [feeling, setFeeling] = useState(0);
    const [url, setUrl] = useState('/')
    // console.log(feeling);

    const dispatch = useDispatch();
    const submitFeeling = ()=> {
        console.log(feeling);
        if (feeling === 0){
            alert('Please select a value.')
        }
        else {
            const action = {
                type: 'UPDATE_FEELING',
                payload: feeling
            }
            dispatch(action);
        }
    }

    const handleRating = (e)=> {
        setUrl('/understanding');
        setFeeling(e.target.value);
    }
    // console.log(feeling);

    return(
        <>
            <div>
                <h2>How are you feeling today?</h2>
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
                        value={feeling}
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
                <Button variant="outlined" onClick={submitFeeling}>Next</Button>
            </Link>
        </>

    );
}