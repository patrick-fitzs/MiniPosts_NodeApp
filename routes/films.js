const express = require('express');
const router = express.Router();

const Film = require('../models/film');

// GET /films
// Instead of sending a static response, we fetch and return data from MongoDB.
// The route handler is async because database queries are asynchronous.
// 'await' pauses execution until Film.find() completes.
// We also wrap it in try/catch to handle potential errors gracefully.
router.get('/', async (req, res) => {
    try{
        const films = await Film.find()  // .limit(5)
        res.send(films)
    }catch(err){
        res.send({message:"Error fetching films"})

    }
})


module.exports = router