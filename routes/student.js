const express = require('express');
const cors = require('cors');
const mongoose = require('../db/database');
const Student = require('../schema/student'); // mongodb model
const router = express.Router();

router.get('/', cors(), (req, res) => {
    Student.find()
      .then(result => res.json(result))
      .catch(err => console.error(err));
});

router.post('/', cors(), (req, res) => {
    const myStudent = new Student(req.body);

    myStudent.save()
      .then(item => res.send('Item saved to database'))
      .catch(err => console.error('Could not save item to database'));
});

module.exports = router;
