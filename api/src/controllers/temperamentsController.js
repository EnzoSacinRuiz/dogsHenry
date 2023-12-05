const { Dog, Temperament } = require("../db"); // Check the correct path for importing Temperament
const axios = require('axios');
const { API_KEY } = process.env;
const infoCleaner2 = require('../utils/cleaner2');



const getAllTemperaments = async () => {
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
}


// const getDogbyTemperament = async (temperamentid) => {
//   try {
//     const temperament = await Temperament.findByPk(temperamentid, {
//       include: [
//         {
//           model: Dog,
//           attributes: ['id', 'name', 'height', 'weight', 'life_span', 'url'],
//         },
//       ],
//     });
//     console.log(temperament.length);

//     const response = (await axios.get('http://localhost:3001/dogs')).data;
//     const filteredDogs = response.filter((dog) => {
//         return dog.Temperaments && dog.Temperaments.includes(temperament.name);
//       });
      
  
  
//     return {temperament,filteredDogs};





    // if (temperament.length===0) {
    //     const tempName = await Temperament.findByPk(temperamentid,{
    //         attributes: ['name'] // Specify the 'name' column to include
    //       });
        

    // // Fetch all dogs from the API endpoint
    // const apiUrl = `http://localhost:3001/dogs`;
    // const response = await axios.get(apiUrl);
    // const allDogs = response.data;
    // console.log(allDogs);

    // // Filter the dogs based on the matching temperament name
    // const dogsWithMatchingTemperament = [];
    // allDogs.forEach((dog) => {
    //   if (dog.Temperaments.includes(tempName)) {
    //     dogsWithMatchingTemperament.push(dog);
    //   }
    // });

    // return dogsWithMatchingTemperament;
      
    // }

    // else {
    //     throw new Error('Temperament not found');

    // }

    //const dogs = await temperament.getDogs(); // Access the associated dogs

    
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
const fetchDogDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/dogs/${id}`);
      const dogDetails = response.data;
      return dogDetails;
    } catch (error) {
      console.error('Error fetching dog details:', error);
      return null;
    }
  };

const getDogbyTemperament = async (temperamentid) => {
    try {
      const temperament = await Temperament.findByPk(temperamentid, {
        include: [
          {
            model: Dog,
            attributes: ['id', 'name', 'height', 'weight', 'life_span', 'url'],
          },
        ],
      });
      const cleanTemperament = [];

    for (let i = 0; i < temperament.Dogs.length; i++) {
      const dog = temperament.Dogs[i];
      const dogDetails = await fetchDogDetails(dog.id);
      if (dogDetails) {
        const extractedTemperaments = dogDetails.Temperaments.map((temp) => temp.name);
        const updatedDog = {
          ...dog.toJSON(), // Convert Sequelize instance to plain object
          Temperaments: `${extractedTemperaments.join(', ')}`,
        };
        cleanTemperament.push(updatedDog);
      }
    }
     

    const cleanTemperament2 = infoCleaner2(cleanTemperament)


  
      const response = (await axios.get('http://localhost:3001/dogs')).data;
      const filteredDogs = response.filter((dog) => {
        return dog.Temperaments && dog.Temperaments.includes(temperament.name);
      });
  
    
    return [...cleanTemperament2,...filteredDogs]
  
    } catch (error) {
      throw new Error(error.message);
    }
  };
  



module.exports={
    getAllTemperaments,
    getDogbyTemperament
}