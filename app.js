const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const layout = require('./views/layout');

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
	res.send(layout());
});
const PORT = 1337;

app.listen(PORT, () => console.log(`This is a Port ${PORT}`));
