const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonebtoken');

exports.createUsuario = async (req,res) => {
    const {usuario_login, usuario_senha} = req.body;
    const hashedsenha = await bcrypt.hash(usuario_senha, 10);

    try {
        const usuario = await Usuario.create({usuario_login, usuario_senha: hashedsenha});
        res.json(usuario);
    } catch (err) {
        res.status(500).json({error: 'Erro ao criar Usuario'});
    } 
};

exports.getUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (err) {
        res.status(500).json({error: 'Erro ao consultar Usuario'})
    }
};
