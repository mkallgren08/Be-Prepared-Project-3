const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {title: 'Be Prepared'});
});




module.exports = router;