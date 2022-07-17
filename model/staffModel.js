const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Undefined name']
    },
    age:{
        type:Number,
        required:[true,'Undefined age']
    },
    task:{
        type:String,
        required:[true,'Undefined task']
    }
})

let staffModel = mongoose.model('staff',staffSchema)

module.exports = {staffModel}