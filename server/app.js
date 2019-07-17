const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,  '../public')));

mongoose.connect("mongodb://127.0.0.1:27017/TestMongoDB", {useNewUrlParser: true}, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Connection with database success !');
    }
    });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = app;
