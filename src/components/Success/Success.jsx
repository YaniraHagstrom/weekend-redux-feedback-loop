import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Success(){
    const startOver = ()=> {

    }

    return(
        <>
            <div>
                <h2>Feedback</h2>
            </div>
            <div>
                <h2>Thank you!</h2>
                <Link to='/'>
                    <Button variant="contained" onClick={startOver}>Leave New Feedback</Button>
                </Link>
            </div>
        </>
    )
}