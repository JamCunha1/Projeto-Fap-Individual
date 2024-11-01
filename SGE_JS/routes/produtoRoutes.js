const express = require ('express');
const route = express.Router();
const produtoController = require('../controllers/produtoController');


route.post('/produtos', produtoController.createProduto);
route.get('/produtos', produtoController.getProdutos);

route.put('/produtos/:id', produtoController.alterarProduto);
route.delete('/produtos/id', produtoController.excluirProduto);

module.exports = route;