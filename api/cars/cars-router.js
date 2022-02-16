// DO YOUR MAGIC
const router = require('express').Router()
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
  } = require('./cars-middleware')
  const Car = require('./cars-model')

router.get('/', async (req, res, next)=>{
    try{
        // res.json({message: "[GET] cars"})
        const cars = await Car.getAll()
        res.json(cars)
    }catch(err){
        next(err)
    }
})
    
router.get('/:id', checkCarId, async (req, res, next)=>{
    try{
        res.json({message: "[GET] car by id"})
    }catch(err){
        next(err)
    }
})
router.post('/',
checkCarPayload,
checkVinNumberValid,
checkVinNumberUnique,
async (req, res, next)=>{
    try{
        res.json({message: "[POST] car"})
    }catch(err){
        next(err)
    }
})
module.exports = router