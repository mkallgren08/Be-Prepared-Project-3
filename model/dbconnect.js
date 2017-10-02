//Setting up connection
const mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/prepared_db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('openUri()', function() {
  //we're connected:
});

module.exports = db;