const express = require('express');
const cors = require('cors');
const mongoose = require('../db/database');
const student = require('../schema/student');
const router = express.Router();

router.get('/', cors(), (req, res) => {
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log('Student route'));
});

module.exports = router;
