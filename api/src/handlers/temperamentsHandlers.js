const {
    getAllTemperaments
} =require("../controllers/temperamentController")

const axios = require('axios');
const { API_KEY } = process.env;
//const Temperament = require("../models/Temperament")

const getTemperaments = async (req,res)=> {
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    let temperaments = [];

    apiUrl.data.forEach((element) => {
      if (element.temperament) {
        const tempes = element.temperament.split(', ');
        temperaments = [...temperaments, ...tempes];
      }
    });
    
    return temperaments;
}

        // tempe.forEach(element => {  // SE RECORRE ESA VARIABLE
        //     Temperament.findOrCreate({  // BUSCA EN (DB) Y SI NO ENCUENTRA YA UNO, LO CREA
        //         where: { name: element }
        //     })
        // });
    


// const fildTemperament = await Temperament.findAll();  // TRAE A TODOS DE LA BASE DE DATOS
// return fildTemperament;
//};

module.exports = {getTemperaments}



