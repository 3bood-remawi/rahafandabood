const express = require('express');
const mongoose = require('mongoose');
const routerBlog =require('./src/Controller/BrandRoutes')
const cors=require('cors')
const { PORT, mongoDBURL } = require('./config'); 
const app = express();


app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    console.log(req)
    return res.status(234).send('Hello')
})

app.use('/',routerBlog)
mongoose.connect(mongoDBURL).then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});
