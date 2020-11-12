const router = require('express').Router();
const service_citas = require('../services/services_citas');

router.get('/citas', service_citas.listarCitas);
router.get('/pending', service_citas.citasPendientes );
router.delete('/citasd', service_citas.cancelarCita);
router.post('/citas', service_citas.crearCita);


module.exports.routes = router;