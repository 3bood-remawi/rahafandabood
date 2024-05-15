const express=require('express')
import {connection} from './DB/connection'
const app =express()
connection(){
app.listen('3001',()=>{
    console.log('server running on port 3001')
})
}
