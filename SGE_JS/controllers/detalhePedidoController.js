const DetalhePedido = require('../models/detalhePedido');

exports.createDetalhePedido = async (req,res) => {
    const {detalhe_valor, detalhe_desconto, cliente_id, pedido_id, produto_id, quantidade} = req.body;
    
    try {
        const detalhe = await DetalhePedido.create ({
            detalhe_valor,
            detalhe_desconto,
            cliente_id,
            pedido_id,
            produto_id,
            quantidade,
        });
        res.json(detalhe);
    } catch (err)  {
        res.status(500).json({error: 'Erro ao criar detalhe do pedido'});
    }
}