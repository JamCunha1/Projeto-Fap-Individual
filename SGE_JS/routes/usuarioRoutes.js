const express = require('express');
const router = express.Router();
const usuario = require('../controllers/usuarioController');

router.post('/usuario', usuario.createUsuario);
router.get('/usuario', usuario.getUsuario);

module.exports = router;