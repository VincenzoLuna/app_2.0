const { Sequelize } = require('sequelize');

const database = new Sequelize('peliculas','root','N@tacion2017',{
  host: 'localhost',
  dialect: 'mysql'
});

module.exports.database = database;




/*try{
  database.authenticate();
  console.log('Conectado');
}catch(error){
  console.log('Algo está mal, revisemos');
}*/