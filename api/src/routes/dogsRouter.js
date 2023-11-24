const { Router } = require("express");

const dogsRouter = Router();

const {
    getDogsHandlers,
    getDetailHandler,
    //postDogsHandler
} = require ("../handlers/dogsHandlers")

dogsRouter.get("/",getDogsHandlers)
dogsRouter.get("/:id",getDetailHandler)





module.exports= dogsRouter;