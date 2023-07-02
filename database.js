const { Sequelize, DataTypes } = require('sequelize');

//Instancia de conexión a BD
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  });

 const conectarDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('CONEXIÓN A LA BASE DE DATOS EXITOSA');
      } catch (error) {
        console.error('ERROR AL INTENTAR CONECTAR LA BASE DE DATOS', error);
      }
 }
  module.exports = {
    sequelize,
    DataTypes,
    conectarDB
  }