require('dotenv').config();

const express = require('express');
const port = 3000;

const studentRouter = require('./routes/student');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/student', studentRouter);

app.get('/', (req, res) => res.send('<h1>Express with MongoDB</h1>'));

app.listen(port, (req, res) => console.log(`Server listening on port ${port}`));
