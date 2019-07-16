const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const events = require('./controllers/eventRouter');
//const users = require('./controllers/userRouter');

const PORT = process.env.PORT || 80;

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, 'client/dist')));

app.use('/api/events', events);

//app.use('/api/users/', users);

app.listen(PORT);
