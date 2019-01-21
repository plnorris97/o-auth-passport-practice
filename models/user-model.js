const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: String,
    googleId: String
})

// User is the model and 'user' is the db collection
const User = mongoose.model('user', userSchema)

module.exports = User;