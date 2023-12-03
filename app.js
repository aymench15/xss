const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./routes/routes')
require('dotenv').config();
const app=express();

app.use(express.static('public'));
app.use(cookieParser());
//app.use(cors());
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended : true}));



app.use(routes);

 app.listen(3000)

console.log('http://localhost:3000/search');