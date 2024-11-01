const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require('./pedido');
const Cliente = require('./cliente');
const Produto = require('./produto');

const DetalhePedido = sequelize.define('detalhePedido', {
    detalhe_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    detalhe_valor: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    detalhe_desconto: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

DetalhePedido.belongsTo(Pedido, {foreignKey: 'pedido_id'});
DetalhePedido.belongsTo(Produto, {foreignKey: 'produto_id'});
DetalhePedido.belongsTo(Cliente, {foreignKey: 'cliente_id'});

module.exports = DetalhePedido;