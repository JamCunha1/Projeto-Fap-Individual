const cliente = require('../models/cliente');

exports.createCliente = async (req, res) => {
    const {nome, email} = req.body;
    
    try {
        const clientes = await cliente.create({nome, email});
        res.status (201).json(clientes);
    } catch (error) {
        res.status (500).json({error: 'Erro ao criar cliente'});
    }
};

exports.getClientes = async (req,res) => {
    try {
        const clientes = await cliente.findAll();
        res.status (200).json(clientes);
    } catch (error) {
        res.status (500).json({error: 'Erro ao buscar cliente'});
    }
};

