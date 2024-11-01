const express = require('express');
const bodyParser = require('body-parser');
const produtoRoutes = require('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const detalhePedidoRoutes = require('./routes/detalheRoutes');
const usuario = require('./routes/usuarioRoutes');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());
app.use('/api', produtoRoutes);
app.use('/api', clienteRoutes);
app.use('/api', pedidoRoutes);
app.use('/api', detalhePedidoRoutes);
app.use('/api', usuarioRoutes);

const startServer = async () => {
    try {
        await sequelize.sync();
        console.log('Banco de dados conectado.');
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
};

startServer();
