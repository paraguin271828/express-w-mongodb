const mongoose = require('mongoose');

mongoose.connect('mongodb://'+process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;
