const express = require('express')
const { getRecords, addRecord, getOneRecord,deleteRecord,updateRecord } = require('../controllers/controllers')
const { staffModel } = require('../model/staffModel')

const router = express.Router()

router.get('/staff',getRecords(staffModel))

router.get('/staff/:id',getOneRecord(staffModel))

router.post('/staff',addRecord(staffModel))

router.put('/staff/:id',updateRecord(staffModel))

router.delete('/staff/:id',deleteRecord(staffModel))

module.exports = router