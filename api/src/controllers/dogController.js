const {Dog} = require("../db")
const {Temperament}=require("../db")
const {DogTemperament}=require("../db")

const axios = require('axios');
const dog = require("../models/Dog");
const infoCleaner = require('../utils/index');
//const Dog = require("../models/Dog");
const path = require('path');
const { log } = require("console");
require('dotenv').config({ path: path.resolve("C:\Users\Enzo Sacin Ruiz\OneDrive\Documentos\henry\fullStack\PI-Dogs-main\api\src\controllers", 'C:\Users\Enzo Sacin Ruiz\OneDrive\Documentos\henry\fullStack\PI-Dogs-main\api/.env') });

const createDriverDB = async (name, height, weight, life_span, url, temperamentName) => {
    try {
        const createdDog = await Dog.create({ 
            name: name,
            height: height,
            weight: weight,
            life_span: life_span,
            url: url,
        });

        const createdTemperament = await Temperament.create({
            name: temperamentName
        });

        // Log the association methods available for Dog model
        //console.log(Object.keys(Dog.prototype));

        // Associate the created Dog with the created Temperament
        await createdDog.addTemperament(createdTemperament);
        //console.log(createdDog.ID);

        return createdDog; // Returning the created Dog instance
    } catch (error) {
        // Handle error here
        console.error('Error creating dog:', error);
        throw error;
    }
};

const { API_KEY } = process.env; // Retrieve API key from environment variable


const getAllDrivers = async() => {
    
    const driverDB = await Dog.findAll({
        include: [
            {
              model: Temperament,
              attributes: ['name'], // Include only the 'name' attribute of Temperament
              through: { model: DogTemperament, attributes: [] }, // Specify the intermediate table and exclude intermediate table attributes
            },
          ],
    })
    
    const infoApi= (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
    const driverApi=infoCleaner(infoApi)

    return [...driverDB,...driverApi]
}

const getDogById = async (id) => {

    const allDogs= await getAllDrivers(); 

    const filterDog = allDogs.filter((dog) => dog.id == id)

    if (filterDog.length > 0) {
        return filterDog[0]
    } else {
        return ('Dog not found')
    }
};

const getDogByName = async (name) => {
    try {
        const infoApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
        const dogApi = infoCleaner(infoApi);

        const driversFiltered = dogApi.filter(dog => dog.name.toLowerCase() === name.toLowerCase());

        const driverBDD = await Dog.findAll({ where: { name: name } });

        const combinedDrivers = [...driversFiltered, ...driverBDD];

        if (combinedDrivers.length === 0) {
          throw new Error('Dog not found');
        }
        return combinedDrivers;
      } catch (error) {
        throw new Error(error.message);
      }
    }


module.exports={
    createDriverDB,
    getDogById,
    getDogByName,
    getAllDrivers}






















































































































































































































































































































































































































































































































































































