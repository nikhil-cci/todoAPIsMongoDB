
//1. imports
require('dotenv').config();
const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

//initialize express and port
app = express();
var port = process.env.PORT || 3001