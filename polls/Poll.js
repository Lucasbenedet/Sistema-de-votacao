const Sequelize = require('sequelize');
const connection = require("../database/database");

const Poll = connection.define('polls',{
    title:{
        type: Sequelize.STRING,
        allowNull:false

    },option1:{
        type: Sequelize.STRING,
        allowNull: false
    },option2:{
        type: Sequelize.STRING,
        allowNull: false
    },option3:{
        type: Sequelize.STRING,
        allowNull: false
    },init:{
        type: Sequelize.STRING,
        allowNull: false
    },end:{
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = Poll;