var express = require('express');
var router = express.Router();

const usuarioControlador = require('../controller/usuarioController')
const servicioDePassword = require('../service/servicioDeRecuperacion')


router.post('/crearUsuario', usuarioControlador.crearUsuario)
router.post('/iniciarSession', usuarioControlador.login)
<<<<<<< HEAD
router.post('/envioDelToken', servicioDePassword.envioDelToken)
router.post('/get_idUsuario/:_id', usuarioControlador.get_idUsuario)
=======


// reseteo de contraseña y cambio de token
>>>>>>> cambiarContraseñaUser
router.post('/password/:token', servicioDePassword.comparaElToken);
router.post('/envioDelToken', servicioDePassword.envioDelToken);
router.post('/changepassword', servicioDePassword.changePassword);

module.exports = router;
