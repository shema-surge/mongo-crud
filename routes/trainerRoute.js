const express = require('express')
const { getRecords, addRecord, getOneRecord,deleteRecord,updateRecord } = require('../controllers/controllers')
const { trainerModel } = require('../model/trainerModel')

const router = express.Router()

router.get('/trainer',getRecords(trainerModel))

router.get('/trainer/:id',getOneRecord(trainerModel))

router.post('/trainer',addRecord(trainerModel))

router.put('/trainer/:id',updateRecord(trainerModel))

router.delete('/trainer/:id',deleteRecord(trainerModel))

module.exports = router