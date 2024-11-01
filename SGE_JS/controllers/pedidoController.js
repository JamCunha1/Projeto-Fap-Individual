const Pedido = require('../models/pedido');

exports.criarPedido = async (req, res) => {
    const {cliente_id} = req.body;

    try {
        const pedido = await Pedido.create({ cliente_id});
        res.json(pedido);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar pedido'});
    }
};

exports.listarPedidos = async (req, res) => {

    try {
        const pedidos = await Pedido.findAll()
        res.status(200).json(pedidos)
    } catch (error) {
        res.status(500).json({error: 'Erro ao listar os pedidos'})
    }
}