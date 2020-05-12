const express = require('express');
const cors = require('cors');
const mongoose = require('../db/database');
const Student = require('../schema/student'); // mongodb model
const router = express.Router();

router.get('/', cors(), (req, res) => {
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log('Student route'));
});

router.post('/', cors(), (req, res) => {
    const myStudent = new Student(req.body);

    myStudent.save()
      .then(item => res.send('Item saved to database'))
      .catch(err => console.error('Could not save item to database'));
});

module.exports = router;
