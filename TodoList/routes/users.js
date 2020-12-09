var express = require('express');
var router = express.Router();

const usuarioControlador = require('../controller/usuarioController')
const servicioDePassword = require('../service/servicioDeRecuperacion')


router.post('/crearUsuario', usuarioControlador.crearUsuario)
router.post('/iniciarSession', usuarioControlador.login)


// reseteo de contraseña y cambio de token
router.post('/password/:token', servicioDePassword.comparaElToken);
router.post('/envioDelToken', servicioDePassword.envioDelToken);
router.post('/changepassword', servicioDePassword.changePassword);

module.exports = router;
