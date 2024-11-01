const produto = require('../models/produto');

exports.createProduto = async (req, res) => {
    const {nome} = req.body;
    
    try {
        const produtos = await produto.create({nome});
        res.status (201).json(produtos);
    } catch (error) {
        res.status (500).json({error: 'Erro ao criar produto'});
    }
};

exports.getProdutos = async (req,res) => {
    try {
        const produtos = await produto.findAll();
        res.status (200).json(produtos);
    } catch (error) {
        res.status (500).json({error: 'Erro ao buscar produto'});
    }
};

exports.alterarProduto = async (req, res) => {
    try {
        //Recupera o parâmetro
        const {id} = req.params;
        //Reupera o corpo da requisição 
        const {nome} = req.body;

        //Encontra o produto pela id e atualiza
        const[update] = await Produto.update({nome}, {where: {id}});

        if (update) {
            const produtoAtualizado = await Produto.findByPk(id); //Recupera o produtoatualizado
            res.status(200).json(produtoAtualizado);
        } else {
            res.status(404).json({error: 'Produto não encontradi'});
        }
    } catch (error) {
        res.status(500).json({error: 'Erro ao alterar produto'});
    }
};

exports.excluirProduto = async(req, res) => { 
    try {
        const {id} = req.params

        const excluir = await Produto.destroy({where: {id}})

        if (excluir){
            res.status(404).json({error: 'Produto não encontrado'})
        }
    } catch (error) {
        res.status(500).json({error: 'Erro ao excluir o produto'})
    }
}