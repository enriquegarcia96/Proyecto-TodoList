var express = require('express');
var router = express.Router();

const usuarioControlador = require('../controller/usuarioController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/crearUsuario', usuarioControlador.crearUsuario)
router.post('/iniciarSession', usuarioControlador.login)

module.exports = router;
