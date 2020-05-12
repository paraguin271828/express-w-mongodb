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

router.put('/', cors(), (req, res) => {
    Student.find({name: 'John'})
      .updateMany({name: 'Bob'})
      .then(result => res.send('Item(s) changed successfully'))
      .catch(err => console.error(err));
});

module.exports = router;
