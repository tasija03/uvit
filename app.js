const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const artikliRoutes = require('./routes/prodavnica');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', artikliRoutes);
app.use(express.static(path.join(__dirname, 'css')));

app.use(function(error, req, res, next){

    console.error(error.stack);

});

module.exports = app;