const server = require('./src/app.js');
const { sequelize, conn } = require('./src/db.js');

const PORT = 3001; 

// Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//   server.listen(3001, () => {
//     console.log('Server listening at 3001'); // eslint-disable-line no-console
//   });
// });

server.listen(PORT, () => {
  conn.sync({alter:true});
  console.log(`Servidor escuchando al puerto ${PORT}`);
})

// sequelize.sync({ force: true }).then(() => {
//   server.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
//   });
// }).catch(error => console.error(error));

  