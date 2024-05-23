// import express from'express'
const express= require('express');
// const brand=require('../Model/BlogPosts')
// import { Book } from '../models/bookModel.js'
const router=express.Router()
const brand=require('../Model/Influencer')

//Route for Save a new Book
router.post('/', async(req,res)=>{
    try{
        if(!req.body.brandName||!req.body.email||!req.body.password||!req.body.phoneNumber||!req.body.country||!req.body.city||!req.body.category||!req.body.numberOfFollowers||!req.body.cover){
            return res.status(400).send({
                message:'send all required fileds: title, author, puvlishYear'
            })
        }
        const newBrand={
            brandName:req.body.brandName,
            email:req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            country:req.body.country,
            city:req.body.city,
            category:req.body.category,
            numberOfFollowers:req.body.numberOfFollowers,
            cover:req.body.cover,
            profilePhoto:req.body.profilePhoto,
        }
        const brands=await brand.create(newBrand)
        return res.status(201).send(brands)
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})


router.patch('/Influencer/:id', async (req, res) => {
     const {id}=req.params;
    const updates = Object.keys(req.body)

    const allowedUpdates = [
     'firstName'
    ]
     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
     if (!isValidOperation) {
         return res.status(400).send({ error: 'Invalid updates!' })
     }
    try {
        const users = await brand.findByIdAndUpdate(id,req.body)
    
        if (!users) {
            return res.status(404).send()
        }

        res.status(200).send(users)
        
    } catch (e) {
        res.status(500).send(e.message)
         
    }
})

module.exports=router

// //Route for Get All Bkoos from database
// router.get('/',async(req,res)=>{
//     try{
//      const books=await brand.find({})
//      return res.status(500).json({
//         count:books.length,
//         data:books
//      })
//     }catch(error){
//         console.log(error.message);
//         res.status(500).send({message:error.message})
//     }
// })

// //Route for Get one book from database by id
// router.get('/:id',async(req,res)=>{
//     try{
//         const {id}=req.params;
//      const book=await Book.findById(id)
//      return res.status(500).json(book)
//     }catch(error){
//         console.log(error.message);
//         res.status(500).send({message:error.message})
//     }
// })

// //Route for Update a Book

// router.put('/:id',async(req,res)=>{
//     try{
//         if(!req.body.title||!req.body.author||!req.body.publishYear){
//             return res.status(400).send({
//                 message:'send all required fileds: title, author, puvlishYear'
//             })
//         }
//         const {id}=req.params;

//         const result =await Book.findByIdAndUpdate(id,req.body)
//         if(!result){
//             return res.status(404).json({message:'Book not found'})
//         }
//         return res.status(200).json({message:'Book updated successfully'})
//     }catch(error){
//         console.log(error.message);
//         res.status(500).send({message:error.message})
//     }
// })



// //Route for Delete a Book

// router.delete('/:id',async(req,res)=>{
//     try{
//        const {id}=res.params;
//        const result=await Book.findByIdAndDelete(id)
//        if(!result){
//         return res.status(404).json({message:'Book not found'})
//        }
//        return res.status(200).json({message:'Book Deleted successfully'})
//     }catch(error){
//         console.log(error.message);
//         res.status(500).send({message:error.message})
//     }
//     return res.status(200).json({message:'Book deleted successfully'})
// }) 