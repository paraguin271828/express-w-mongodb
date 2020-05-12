const express = require('express');
const mongoose = require('../db/database');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Student route');
});

module.exports = router;
