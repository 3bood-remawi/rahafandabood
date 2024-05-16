const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: false
    },
    facebook: {
        type: String,
        required: false
    },
    cover: {
        type: String,
        required: false
    },
    profilePhoto: {
        type: String,
        required: false
    },
  
});

const User = mongoose.model('User', userSchema);
module.exports = User;
