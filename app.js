const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connect = require('connect');
const serveStatic = require('serve-static'); 

const app = express();

const URL = process.env.MongoDB_URL;

/* MIDDLEWARES*/

// for json data sending and recieving
app.use(express.json({extended: true}));
// Allow all requests from all domains & localhost
app.use(cors());
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.listen(3000, () => console.log("server started!"))

/*ROUTES*/

const tutorialRoutes = require('./api/routes/tutorials');
app.use('/tutorials', tutorialRoutes);