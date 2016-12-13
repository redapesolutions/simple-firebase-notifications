const express = require('express');
const jsonParser = require('body-parser').json();

var tokenRouter = module.exports = exports = express.Router();

// Simple route to accept token from user
tokenRouter.post('/setToken', jsonParser, (req, res) => {
  console.log('TOKEN RECEIVED: ' + req.body.token);
});
