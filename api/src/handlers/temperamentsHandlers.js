const { Temperament } = require("../db"); // Check the correct path for importing Temperament
const axios = require('axios');
const { API_KEY } = process.env;


const getTemperaments = async (req, res) => {
  try {
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

    apiUrl.data.forEach(async (element) => {
      if (element.temperament) {
        const tempes = element.temperament.split(', ');

        tempes.forEach(async (temperamentName) => {
          try {
            // Find or create each temperament
            const [temperament, created] = await Temperament.findOrCreate({
              where: { name: temperamentName },
            });

            // Handle success or error for each temperament creation
            if (created) {
              console.log(`Temperament "${temperament.name}" created.`);
            } else {
              console.log(`Temperament "${temperament.name}" already exists.`);
            }
          } catch (error) {
            console.error(`Error finding or creating temperament: ${error}`);
          }
        });
      }
    });

    const allTemperaments = await Temperament.findAll(); // Retrieve all temperaments from the database
    return allTemperaments;
  } catch (error) {
    console.error(`Error retrieving temperaments: ${error}`);
    return []; // Return an empty array or handle the error as needed
  }
};

module.exports = { getTemperaments };
