const express = require('express');
const router = express.Router();
const db = require('../modules/pool');


// GET all feedbacks:
router.get('/', (req, res)=> {
    const sqlQuery = `
        SELECT * FROM feedback;`

    db.query(sqlQuery)
        .then(result => {
            // console.log(result.rows);
            res.send(result.rows);
        }).catch(error => {
            res.sendStatus(500);
            consol.log('Error getting feedback from database:', error);
        })
})







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
router.delete('/:id', (req, res)=> {
    console.log('delete request received');
    console.log(req.params.id);
    const sqlQuery = `
        DELETE FROM feedback
            WHERE id=$1;
    `
    const sqlValues = [req.params.id];
    db.query(sqlQuery,sqlValues)
        .then(response => {
            res.sendStatus(200);
        })
        .catch(error => {
            res.sendStatus(500);
            console.log('Error in Delete', error);
        })
})



module.exports = router;