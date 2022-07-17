const express = require('express')
const { getRecords, addRecord, getOneRecord,deleteRecord,updateRecord } = require('../controllers/controllers')
const { traineeModel } = require('../model/traineeModel')

const router = express.Router()

router.get('/trainee',getRecords(traineeModel))

router.get('/trainee/:id',getOneRecord(traineeModel))

router.post('/trainee',addRecord(traineeModel))

router.put('/trainee/:id',updateRecord(traineeModel))

router.delete('/trainee/:id',deleteRecord(traineeModel))

module.exports = router