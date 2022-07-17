const mongoose = require('mongoose')

const traineeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Undefined name']
    },
    age:{
        type:Number,
        require:[true,'Undefined age']
    },
    cohort:{
        type:String,
        required:[true,'Undefined cohort']
    },
    stack:{
        type:String,
        required:[true,'Undefined Stack']
    }
})

let traineeModel = mongoose.model('trainees',traineeSchema)

module.exports = {traineeModel}