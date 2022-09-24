// MUI imports:
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Feelings(){

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
                        name="position"
                        defaultValue="top"
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
            <button>Next</button>
        </>

    );
}