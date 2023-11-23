const express = require('express');
const axios = require('axios');
const mainRouter = require('./routes/mainRouter.js');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//const routes = require('./routes/index.js');

require('dotenv').config(); // Load environment variables

require('./db.js');

const server = express();
server.use(morgan('dev'));
server.use(express.json());

//server.use(cors());

server.use(mainRouter);

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Middleware function to make Axios GET request with API key
// const axiosMiddleware = async (req, res, next) => {
//   try {
//     if (req.url === '/your/api/route') { // Modify this condition to match your specific route
//       const apiKey = process.env.API_KEY; // Retrieve API key from environment variable

//       const headers = {
//         'Content-Type': 'application/json',
//         'x-api-key': apiKey,
//       };

//       const response = await axios.get(`https://api.thecatapi.com/v1/images/search?format=json&limit=10`, { headers });
//       req.apiResponse = response.data; // Store API response in the request object for further handling
//     }
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

//server.use(axiosMiddleware); // Apply the middleware to intercept specific routes



// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
