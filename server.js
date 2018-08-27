const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todos = require('./routes/api/todos');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
 .connect(db)
 .then(() => console.log('mongodb connected...'))
 .catch(err => console.log(err));

app.use('/api/todos', todos);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
