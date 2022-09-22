const { DATEONLY } = require('sequelize');
const sequelize = require('sequelize');
const connection = new sequelize('gerenciador', 'root' , '123456',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;