// import dotenv
const dotenv = require('dotenv');
dotenv.config(); // this loads my env file

// import express library
const express = require('express');

// create an express app instance
const app = express();

// import mongoose package
const mongoose = require('mongoose')

const filmRoute = require('./routes/films.js');
app.use('/films', filmRoute)


app.get('/', (req, res) => {
    res.send('Homepage about Cloud computing stuff')
})

// mongodb connection. Make sre to include db name 'MiniFilms'
const MURL = `mongodb+srv://Main_User959:${process.env.DB_PASS}@clusterbustertester.d8lvw.mongodb.net/MiniFilms?retryWrites=true&w=majority&appName=ClusterBusterTester`

mongoose.connect(MURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Listening on port 3000');
        });
    })
    .catch((err) => {
        console.error('Connection Error:', err)
    })

