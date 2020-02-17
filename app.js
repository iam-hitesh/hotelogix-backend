const express = require('express');
const config = require('./config');
const db = require('./database');

// //require chalk module to give colors to console text
// const chalk = require('chalk');

// const connected = chalk.bold.cyan;
// const error = chalk.bold.yellow;
// const disconnected = chalk.bold.red;
// const termination = chalk.bold.magenta;

const app = express();
const port = config.app.port || 3000;


app.get('/', (req, res) => {
	res.send("process.env.SECRET_KEY");
});

app.listen(port, () => {
	console.log(`Running Server at port ${port}!`);
});