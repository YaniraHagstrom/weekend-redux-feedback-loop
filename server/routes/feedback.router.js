const express = require('express');
const router = express.Router();
const db = require('../modules/pool');


// GET all feedbacks:







// POST feedback:
router.post('/', (req, res)=> {
    console.log(req.body);
    const sqlQuery = `
        INSERT INTO feedback (feeling, understanding, support, comments)
            VALUES ($1, $2, $3, $4);
            `
    
    const sqlValues = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]

    db.query(sqlQuery, sqlValues)
        .then(response => {
            res.sendStatus(201);
        })
        .catch(error=> {
            res.sendStatus(500);
            console.log('error in server POST /feedback', error);
        })
})






// DELETE feedback based on id:



module.exports = router;