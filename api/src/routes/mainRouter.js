const { Router } = require("express");
const dogsRouter = require("./dogsRouter")
const temperamentRouter = require("./temperamentsRouter")

const mainRouter = Router();
mainRouter.use("/dogs", dogsRouter)
mainRouter.use("/temperaments", temperamentRouter)

module.exports = mainRouter;