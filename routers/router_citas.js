const router = require('express').Router();
const service_citas = require('../services/services_citas');

router.get('/', service_citas.listarCitas);
router.get('/pending', service_citas.citasPendientes );
router.delete('/', service_citas.cancelarCita);
router.post('/', service_citas.crearCita);


module.exports = router;