const Sequelize = require('sequelize');
const connection = require("../database/database");
const Poll = require("../polls/Poll");

const Answer = connection.define('answers',{
    vote:{
        type: Sequelize.STRING,
        allowNull:false
    }
});


Answer.belongsTo(Poll);
module.exports = Answer;