const {Dog} = require("../db")
const axios = require('axios');
const dog = require("../models/Dog");
const infoCleaner = require('../utils/index');
//const Dog = require("../models/Dog");
const path = require('path');
require('dotenv').config({ path: path.resolve("C:\Users\Enzo Sacin Ruiz\OneDrive\Documentos\henry\fullStack\PI-Dogs-main\api\src\controllers", 'C:\Users\Enzo Sacin Ruiz\OneDrive\Documentos\henry\fullStack\PI-Dogs-main\api/.env') });
// const createDriverDB = async ( name , lastName , description , image , nationality , birthDate) => {
//     return await Driver.create({name , lastName , description , image , nationality , birthDate})
//      ;
// };

const getDriverById = async (id, source) => {
    const { API_KEY } = process.env; // Retrieve API key from environment variable

    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
    };

    const driver =
        source === 'api'
            ? (await axios.get(`https://api.thecatapi.com/v1/images/${id}`, { headers })).data
            : await Dog.findByPk(id);

    return driver;
};

const getAllDrivers = async() => {
    const { API_KEY } = process.env; // Retrieve API key from environment variable

    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
    };

    const driverDB = await Dog.findAll()
    
    const infoApi= (await axios.get(`https://api.thedogapi.com/v1/images/search?limit=100&api_key=live_sMTz1SxLwuu6M31wRho1rLtZTXpYNabxBiY15Cb5qLqzk0FbHiWBA38Ilv4wve1r`, { headers })).data
    const driverApi=infoCleaner(infoApi)

    return [...driverDB,...driverApi]
}

// const getDriverByName = async (name) =>{
//     const infoApi= (await axios.get("http://localhost:5000/drivers")).data
//     const driverApi=infoCleaner(infoApi);

//     const driversFiltered=driverApi.filter(driver=>driver.name===name)

//     const driverBDD= await Driver.findAll({where: {name:name}});

//     return[...driversFiltered,...driverBDD]        

// }




module.exports={
    //createDriverDB,
    getDriverById,
    //getDriverByName,
    getAllDrivers}