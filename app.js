const express = require('express');
// import { Express } from 'express';
const app = express();

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// importing route
const weatherRoute = require('./routes/weather');
//adding ejs
app.set('view engine', 'ejs');

app.use('/', weatherRoute);

const PORT = 3001;

app.listen(PORT, () => console.log('server started'));