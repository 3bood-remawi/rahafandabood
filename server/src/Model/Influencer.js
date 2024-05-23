const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator=require('validator')
const influencer = new Schema({
  
    firstName: {
        type: String,
        required: true,
        trim:true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error(' first name is required')
            }
        }
    },
    lastName: {
        type: String,
        required: true,
        trim:true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error('last  name is required')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
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
        required: true,
        trim:true,
        minlength:8,
        validate(value){
            if(!validator.isStrongPassword(value)){
              throw new Error('Password is not Strong')
            }

        }
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
    postIds:{
        type:mongoose.Schema.Types.ObjectId, ref: 'brand-posts',
        required:true
    },
    offerIds:{
        type:mongoose.Schema.Types.ObjectId, ref: 'offers',
        required:true
    },
  
});

const User = mongoose.model('influencers', influencer);
module.exports = User;
