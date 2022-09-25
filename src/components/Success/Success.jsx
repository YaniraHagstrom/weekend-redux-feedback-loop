

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
                    <Button variant="contained" onClick={startOver}>Next</Button>
                </Link>
            </div>
        </>
    )
}