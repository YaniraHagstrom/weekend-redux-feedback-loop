import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';


export default function Review(){
    const feeling = useSelector(store => store.feelingsReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportedReducer);
    const comments = useSelector(store => store.commentsReducer);

    const submit = ()=> {
        // POST to DB:
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling, 
                understanding,
                support,
                comments
            }
        }).then(response => {

        })

    }
    return (
        <>
            <div>
                <h2>Feelings: {feeling}</h2>
                <h2>Understanding: {understanding}</h2>
                <h2>Support: {support}</h2>
                <h2>Comments: {comments}</h2>
            </div>
            <Link to='/success'>
                <Button variant="outlined" onClick={submit}>Next</Button>
            </Link>
        </>
    )
}