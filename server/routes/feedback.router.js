const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('got to router POST');
    console.log('here is the req.body', req.body);
    const feedback = req.body;
    pool.query(`INSERT INTO "feedback" 
                  ("feeling", "understanding", "support", "comments")
                  VALUES ($1, $2, $3, $4);`, 
                  [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
      .then((results) => {
        // console.log('results from database', results);
        res.sendStatus(201);
      }).catch((errFromPG) => {
        console.log('error from database', errFromPG);
        res.sendStatus(500);
      })
  });
  
  router.get('/', (req, res) => {
    console.log('got to router GET');
    pool.query(`SELECT * FROM "feedback";`)
      .then((results) => {
        console.log('Here are the router get results', results);
        res.send(results.rows);
      }).catch((error) => {
        console.log('error from router get', error);
      })
  });

  router.delete('/:id', (req, res) => {
    console.log('Got to DELETE');
    console.log(req.params.id);
    pool.query(`DELETE FROM "feedback" WHERE "id" = $1;`, [req.params.id])
      .then((results) => {
        console.log('GOT TO DELETE', results);
        res.sendStatus(200);
      }).catch((error) => {
        console.log('Error from delete', error);
  
      })
  });

  module.exports = router;