const router = require('express').Router();
const services_usuarios = require('../services/services_usuarios.js');

router.post('/user', services_usuarios.registro);
router.get('/user', services_usuarios.login);



module.exports = router;