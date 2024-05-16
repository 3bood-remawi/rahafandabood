const mongoose =require('mongoose')
const brand =mongoose.Schema({
    brandName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
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
        type:mongoose.Schema.Types.ObjectId, ref: 'offer',
        required:true
    },
})

const User =mongoose.model('brand',brand) 
module.exports= User