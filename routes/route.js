const express = require('express');

const router = express.Router();

router.get('/check', (req, res) => {
    res.send("Congratulations! Your app works! :)");
})

router.post('/add', (req, res) => {
    // Add logic here

    //Checks if arguments exist
    if (req.body.x && req.body.y) {

        //Checks if arguments are numbers
        if ((!isNaN(req.body.x)) && (!isNaN(req.body.y)) ) {
            const sum = parseInt(req.body.x) + parseInt(req.body.y);
            res.status(200).send(`${req.body.x} + ${req.body.y} = ${sum}`);
        } else {
            res.status(400).send('Both arguments must be numbers');
        }

    } else {
        res.status(400).send('Both arguments must be provided');
    }
    
})

module.exports = router;