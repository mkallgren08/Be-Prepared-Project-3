const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', function(req, res) {
  res.render('profile');
});


module.exports = router;