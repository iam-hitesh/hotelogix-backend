const express = require('express');
const config = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send(process.env.SECRET_KEY);
});

app.listen(port, () => {
	console.log(`Running Server at port ${port}!`);
});