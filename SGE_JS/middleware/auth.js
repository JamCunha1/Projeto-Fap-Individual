const jwt = require('jsonwebtoken');
const JWT_SECRET = 'chave_secreta';

const authMiddleware = (req, res, next) => {
  // Obtém o token do cabeçalho da requisição
  const token = req.header('Authorization').replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
  }

  try {
    // Verifica o token e extrai os dados
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Adiciona o usuário à requisição (a partir do token decodificado)
    req.usuario = decoded;
    
    next(); // Continua para a rota protegida
  } catch (err) {
    res.status(401).json({ error: 'Token inválido.' });
  }
};

module.exports = authMiddleware;