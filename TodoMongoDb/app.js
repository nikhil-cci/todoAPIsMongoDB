
//1. imports
require('dotenv').config();
const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

//initialize express and port
app = express();
var port = process.env.PORT || 3001

//Initialise Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });

//Add body parser
app.use(bodyParser.urlencoded({ urlencoded: true }));
app.use(bodyParser.json());

//Add morgan for logs
app.use(morgan('short'))

//Initialize the routes
var User = require('./models/user.model');
var userRoute = require('../TodoMongoDb/routes/user.routes');
userRoute(app);

//Welcome page
app.get('/', (req,res)=>{
    res.send('Welcome !')
})

//Listen at port
app.listen(port, ()=>{
    console.log('Application started on PORT' + port)
})