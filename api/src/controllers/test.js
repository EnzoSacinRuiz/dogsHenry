const path = require('path');
require('dotenv').config({ path: path.resolve("C:\Users\Enzo Sacin Ruiz\OneDrive\Documentos\henry\fullStack\PI-Dogs-main\api\src\controllers", 'C:\Users\Enzo Sacin Ruiz\OneDrive\Documentos\henry\fullStack\PI-Dogs-main\api/.env') });
const { API_KEY } = process.env;;
const { Dog, Temperament } = require("../db");

const { Sequelize } = require('sequelize');

//  function getTemperamentsTest (temperamentid){
//      const temperament =  Temperament.findByPk(temperamentid 
//     //,{
//     //     include: [
//     //       {
//     //         model: Dog,
//     //         attributes: ['id', 'name', 'height', 'weight', 'life_span', 'url'],
//     //       },
//     //     ],
//     //   };
//      )

//       console.log(temperament)
// }

// getTemperamentsTest("ff50ad42-4d3d-4e8c-ac71-19890017cc10")

function getTemperamentsTest (temperamentid){
  const temperament =  Temperament.findByPk(temperamentid)

   console.log(temperament)
}

getTemperamentsTest("ff50ad42-4d3d-4e8c-ac71-19890017cc10")


  