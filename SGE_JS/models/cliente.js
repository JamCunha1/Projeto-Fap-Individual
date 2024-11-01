const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const DetalhePedido = require('./detalhePedido');

const Cliente = sequelize.define('cliente', {
    cliente_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        alowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        alowNull: false,
    }
});

Cliente.hasMany(Pedido, {foreignKey: 'pedido_id'});
Cliente.hasMany(DetalhePedido, {foreignKey: 'detalhe_id'})

module.exports = Cliente;