const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
var mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const Smoothies = require('./routes/smoothies');

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/smoothies', Smoothies);
mongoose.connect('mongodb://localhost/smoothies-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
module.exports = app;
