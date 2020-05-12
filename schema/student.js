const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const student = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Every student needs a unique username']
  },
  first_name: String,
  email: String
});

module.exports = mongoose.model('Student', student);

