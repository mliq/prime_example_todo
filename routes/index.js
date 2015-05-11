var express = require('express');
var app = express.Router();
var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');
var path = require('path');

app.get("/", function(req,res,next){
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

app.post("/", function(req,res,next){
  Todo.create(req.body, function(err, post){
    res.json(post);
  })
});

console.log('create loaded');
module.exports = app;