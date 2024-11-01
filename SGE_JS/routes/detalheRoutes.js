const express = require('express');
const router = express.Router();
const detalhePedido = require('../controllers/detalhePedidoController');

router.post('/detalhePedidos', detalhePedido.createDetalhePedido);

module.exports = router;