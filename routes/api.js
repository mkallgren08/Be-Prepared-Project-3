const express = require('express');
const router = express.Router();
const multer = require('multer');
path = require('path');
const Users = require('../models/Users.js');


router.route('/user/post').post(function (req, res) {
  const users = new Users(req.body);
  users.save()
  .then(users => {
    res.redirect('/');
  })
  .catch(err => {
    res.status(400).send('unable to save to database');
  });
});

router.post('/', multer({dest: './uploads/'}).single('upl'), function(req,res){
  console.log(req.body);
  console.log(req.file);
  res.status(204).end();
});

module.exports = router;