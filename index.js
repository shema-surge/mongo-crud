const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json())

app.use('/entities',require('./routes/trainerRoute'))
app.use('/entities',require('./routes/traineeRoute'))
app.use('/entities',require('./routes/staffRoute'))

mongoose.connect(process.env.MONGO_URI,(err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log('connected to MongoDB Atlas')
    }

})

app.use((err,req,res,next)=>{
    res.status(400).json({Error_message:err.message})
})

app.listen(process.env.PORT,()=>{
    console.log(`Port ${process.env.PORT}: Server running ...`)
})