const { Router } = require('express');

const temperamentRouter = Router();
const Temperament = require("../models/Temperament")

const {
    getTemperaments
} = require("../handlers/temperamentsHandlers")

temperamentRouter.get("/", async (req, res) => {
    try {
          // EJECUTAMOS LA FUNCION DEL CONTROLADOR QUE TIENE LOS TEMPERAMENTOS EXISTENTES

        const allTemperaments = await getTemperaments()  // BUSCAMOS TODOS EN LA TABLA DE TEMPERAMENTOS

        return res.status(200).json(allTemperaments)
    } catch (error) {
        return res.status(404).send({ error: error.message })
    }
});

module.exports = temperamentRouter;



