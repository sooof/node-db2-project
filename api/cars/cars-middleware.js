const Car = require('./cars-model')
const db = require('../../data/db-config')
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  // console.log("checkCarId middleware")
  // next()
  try{
    const car = await Car.getById(req.params.id)
    if(!car){
      next({status: 404, message: `car with id ${req.params.id} is not found` })
    }else{
      next()
    }
  }catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // console.log("checkCarPayload middleware")
  // next()
  try{
    const {vin,make, model, mileage } = req.body
    if(!vin||!vin.trim()){
      next({ status: 400, message: `vin is missing`  })
    }else if(!make||!make.trim()){
      next({ status: 400, message: `make is missing`  })
    }else if(!model || !model.trim()){
      next({ status: 400, message: `model is missing`  })
    }else if(!mileage){
      next({ status: 400,message: `mileage is missing`  })
    }else{
      next()
    }
  }catch(err){
    next(err)
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  // console.log("checkVinNumberValid middleware")
  // next()
  try{
    // var existVin = vinValidator.validate('11111111111111111'); 
    var existVin = vinValidator.validate(req.body.vim.trim()); 
    console.log(existVin)

    if(existVin){
      next({ status: 400, message: `vin ${req.body.vin} is invalid`})
    }else{
      next()
    }

  }catch(err){
    next(err)
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  // console.log("checkVinNumberUnique middleware")
  // next()
  try{
    const existCarvin = await db('cars').where('vin', req.body.vin.trim()).first()
    console.log(existCarvin)
    if(existCarvin){
      next({ status: 400, message: `vin ${req.body.vin} already exists`})
    }else{
      next()
    }
  }catch(err){
    next(err)
  }
}
module.exports ={
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}