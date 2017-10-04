const express = require('express');
const hbs = require('express-hbs');
const path = require('path');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const index = require('./routes/index');
const users = require('./routes/users');
const db = require('./model/dbconnect.js');



//Configuring database models
const Users = require('./models/Users.js');

const app = express();

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//configuring database connection
mongoose.connect('mongodb://proj3:ClassProject@ds147544.mlab.com:47544/prepared_db', {
  useMongoClient: true
});
  // When successfully connected
  mongoose.connection.on('connected', function() {
    console.log('Mongoose connection open');
  });

// If the connection throws an error
  mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
  });


//Requiring routes
const index = require('./routes/index');
const userdata = require('./routes/userdata');

//Configuring routes
app.use('/', index);
app.use('/user', userdata);

app.get('/', function (req, res) {
  res.render('index');

});

/* Send every request to the React app
// Define any API routes before this run

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});*/


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(PORT, function() {
  console.log('listening on port' + PORT);
});

module.exports = app;
