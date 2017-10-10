const express = require('express');
const router = express.Router();
const multer = require('multer');
path = require('path');
const Users = require('../models/Users.js');
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

require('dotenv').config();

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file';
}
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://" + process.env.AUTH0_DOMAIN + "/.well-known/jwks.json"
  }),
  //validate the audience and the issuer
  audience: process.env.AUTH0_AUDIENCE,
  issuer: "https://" + process.env.AUTH0_DOMAIN + "/",
  algorithms: ["RS256"]

});

const checkScopes = jwtAuthz([ 'read:profile', 'write:profile']);

router.get(
    "/users/:id",
    checkJwt,
    //  jwtAuthz(["read:profile", "write:profile"]),
    function(req, res) {
      res.json({
        name: "Joe",
        address: "1725 Main St."
      });
    }
);

router.get('/api/public', function(req, res) {
  res.json({ message: "Hello from a public endpoint! You don't need to be authenticated to see this." });
});

router.get('/api/private', checkJwt, checkScopes, function(req, res) {
  res.json({ message: "Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this." });
});

/*router.post('/api/admin', checkJwt, checkScopesAdmin, function(req, res) {
  res.json({ message: "Hello from an admin endpoint! You need to be authenticated and have a scope of write:messages to see this." });
});*/

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