require('dotenv').config(); 
const {
    API_KEY, DB_USER
  } = process.env;

const apiKey = DB_USER;
console.log(apiKey);