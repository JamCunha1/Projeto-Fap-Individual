const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
    produto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        alowNull: false,
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = Produto;