const { Router } = require("express");

const dogsRouter = Router();

const {
    //getDogsHandlers,
    getDetailHandler,
    //postDogsHandler
} = require ("../handlers/dogsHandlers")

dogsRouter.get("/",getDetailHandler)




module.exports= dogsRouter;