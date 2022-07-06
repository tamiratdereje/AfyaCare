const express = require('express');
const morgan = require('morgan');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
var session = require('express-session');

dotEnv.config();
const app = express();


mongoose.connect(process.env.DATA_BASE);
var database = mongoose.connection;
database.on('error', console.error.bind(console, "connection error"));
database.once('open', () => {console.log("connected.....") });

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }));


  // Initializing middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Checking if server starts successfully
app.get('/api',(req,res)=>{
    res.json({ message: 'server starts successfully '})
})


// defining route


// assinging port
app.listen(3000, ()=>{
    console.log('app running on port: 3000')
});