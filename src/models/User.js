const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: String,
    emial: String,
    password: String
});

module.exports = model('user', userSchema);
