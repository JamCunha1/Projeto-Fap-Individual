const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

//Rota para gerar o token 
app.post('/login', (req,res) => {
    const usuario = {id:1, usuario_nome: req.body.usuario_nome, usuario_email: req.body.usuario_email};

    //Gerar o token
    const token = jwt.sign({usuario}, process.env.JWT_SECRET, {expiresIn: '1h'});
    res.json({token});
});

//Middleware para verificar o token 
function verifyToken(req,res,next) {
    const toke = req.headers['autorization'];
    if (!token) return res.sendStatus(403);

    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) return res.sendStatus(403);
        req.usuario = data.usuario;
        next();
    });
}

//Rota protegida 
app.get('/protegida', verifyToken, (req,res) => {
    const {usuario_nome, usuario_email} = req.usuario;
    res.json({message: 'Rota protegida', usuario_nome, usuario_email});
});

//Rota sem segurança
app.get('/semsegurança', (req, res) => {
    const {usuario_nome, usuario_email} = req.usuario;
    res.json({message: 'Rota sem segurança', usuario_nome, usuario_email});
});