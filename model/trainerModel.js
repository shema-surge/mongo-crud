const mongoose = require('mongoose')

const trainerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Undefined name']
    },
    age:{
        type:Number,
        required:[true,'Undefined age']
    },
    stack:{
        type:String,
        required:[true,'Undefined stack']
    }
})


const trainerModel = mongoose.model('trainers',trainerSchema)
module.exports = {trainerModel}