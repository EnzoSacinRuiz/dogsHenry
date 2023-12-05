const { Router } = require('express');

const temperamentRouter = Router();
const { Temperament } = require("../db")

const {
    getTemperaments,
    
} = require("../handlers/temperamentsHandlers")

temperamentRouter.get("/",getTemperaments);

//temperamentRouter.get("/:id", getDogbyTemperament)

module.exports = temperamentRouter;



