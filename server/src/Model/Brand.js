const mongoose =require('mongoose')
const validator=require('validator')
const brand =mongoose.Schema({
    brandName:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(validator.isEmpty(value))
            {
                throw new Error(' brand name is required')
            }
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:8,
        validate(value){
            if(!validator.isStrongPassword(value)){
              throw new Error('Password is not Strong')
            }

        }
    },
    phoneNumber:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new Error('Phonr number is invalid')
            }
        }
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    numberOfFollowers:{
        type:String,
        required:true
    },
    cover:{
        type:String,
        required:true
    },
    profilePhoto:{
        type:String,
        required:true
    },
    postIds:{
        type:mongoose.Schema.Types.ObjectId, ref: 'brand-posts',
        required:true
    },
    offerIds:{
        type:mongoose.Schema.Types.ObjectId, ref: 'offers',
        required:true
    },
}})

const User =mongoose.model('brands',brand) 
module.exports= User