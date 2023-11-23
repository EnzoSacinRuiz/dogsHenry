const { Router } = require("express");
const dogsRouter= require("./dogsRouter")
const temperamentsRouter= require("./temperamentsRouter")


const mainRouter = Router();

mainRouter.use("/dogs",dogsRouter)
//mainRouter.use("/temperaments", temperamentsRouter)






module.exports = mainRouter;