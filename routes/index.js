const express = require('express');
const router = express.Router();
const multer = require('multer');
path = require('path');

router.get('/', function(req, res) {
  res.render('index', {title: 'Be Prepared'});
});

router.get('/pdfupload', function(req, res) {
  res.render('pdfupload', {title: 'PDF Uploads'});
});

router.post('/', multer({dest: './uploads/'}).single('upl'), function(req,res){
  console.log(req.body);
  console.log(req.file);
  res.status(204).end();
});

module.exports = router;