const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./cliente');

const Pedido = sequelize.define('pedido', {
    pedido_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        primaryKey: true,
    },
    dataCompra: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW, //Define a data atual como padrão
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
            key: 'id',
        },
    },
});

Pedido.belongsTo(Cliente, {foreignKey: 'cliente_id'});

module.exports = Pedido;