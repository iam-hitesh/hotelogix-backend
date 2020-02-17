const mongoose = require('mongoose');
const config = require('./config');
const { db: { host } } = config;
const connectionString = host;

mongoose.connect(connectionString, { 
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;

