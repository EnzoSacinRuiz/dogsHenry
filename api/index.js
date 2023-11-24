const server = require('./src/app.js');
const { sequelize, conn } = require('./src/db.js');

const PORT = 3001; 
server.listen(PORT, () => {
  conn.sync({alter:true});
  console.log(`Servidor escuchando al puerto ${PORT}`);
})



  