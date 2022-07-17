const mongoose = require('mongoose')

function getRecords(model){
    return async (req,res,next)=>{
        try{
            res.json(await model.find())
        }catch(err){
            next(err)
        }
    }
}

function addRecord(model){
    return async (req,res,next)=>{
        try{
            const newRecord = await new model(req.body).save()
            res.json(newRecord)
        }catch(err){
            next(err)
        }
    }
}

function getOneRecord(model){
    return async (req,res,next)=>{
        try{
            const oneRecord = await model.findById(req.params.id)
            if(oneRecord){
               res.json(oneRecord) 
            }else{
                throw new Error('No such record found')
            }
        }catch(err){
            next(err)
        }
    }
}

function deleteRecord(model){
    return async (req,res,next)=>{
        try{
            const deletedRecord = await model.findByIdAndDelete(req.params.id)
            res.json(deletedRecord)
        }catch(err){
            next(err)
        }
    }
}

function updateRecord(model){
    return async (req,res,next)=>{
        try{
            const updatedRecord = await model.findByIdAndUpdate(req.params.id,req.body)
            res.json(updatedRecord)
        }catch(err){
            next(err)
        }
    }
}

module.exports = { getRecords,addRecord,getOneRecord,deleteRecord,updateRecord }