const mongoose = require('mongoose');
const mdbString = 'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_HOST + '/' + process.env.DB_NAME + '?retryWrites=true&w=majority'; 

console.log(mdbString);

mongoose.connect(mdbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) console.error('Could not connect to the database');
});

module.exports = mongoose;
