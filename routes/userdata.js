const express = require('express');
const router = express.Router();
const Users = require('../models/Users.js');

router.route('/').get(function (req, res) {
  res.render('index');
});

//Render adduser page
router.route('/adduser').get(function (req, res) {
  res.render('adduser');
});

//Render safestatus page
router.route('/pdfupload').get(function (req, res) {
    res.render('pdfupload');
});

//Get all user data
router.get('/', function(req, res, next) {
  Users.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

router.route('/add/post').post(function (req, res) {
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