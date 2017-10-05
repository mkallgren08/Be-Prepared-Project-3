const express = require('express');
const router = express.Router();
const Users = require('../models/Users.js');


router.route('/post').post(function (req, res) {
  const users = new Users(req.body);
  users.save()
  .then(users => {
    res.redirect('/');
  })
  .catch(err => {
    res.status(400).send('unable to save to database');
  });
});

module.exports = router;