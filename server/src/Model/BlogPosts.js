// import mongoose from "mongoose";
const mongoose =require('mongoose')
// const {Schema}=mongoose

const blog =mongoose.Schema({ 
    date:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
})

const User =mongoose.model('blog',blog) 
module.exports= User