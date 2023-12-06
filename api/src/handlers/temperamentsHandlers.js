const { Dog, Temperament } = require("../db"); // Check the correct path for importing Temperament
const axios = require('axios');
const { API_KEY } = process.env;

const {
  getAllTemperaments,
  getDogbyTemperament

} =
  require("../controllers/temperamentsController")


const getTemperaments = async (req, res) => {
  const { temperamentid } = req.query;

  try {
    if (temperamentid) {
      const temperamentbyID = await getDogbyTemperament(temperamentid);
      res.status(200).json(temperamentbyID);
    } else {
      console.log("AllTemps");
      const response = await getAllTemperaments();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = { getTemperaments };




