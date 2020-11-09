const sequelize = require('../models/index.js');

exports.crearCita = async (req, res) =>{
    const {cliente_id, fecha, observaciones, precio, estado} = req.body;
    await sequelize.query(`INSERT INTO CITAS (cliente_id, fecha, observaciones, precio, estado)
    VALUES ('${cliente_id}', '${fecha}', '${observaciones}', '${precio}', '${estado}')`, {type: sequelize.QueryTypes.INSERT})
    return (citas => res.json(citas)) 
}
exports.listarCitas = async (req, res) =>{
    await sequelize.findAll(citas => res.json(citas))
    return citas
}
exports.citasPendientes = async (req, res) =>{
    await sequelize.query("SELECT * FROM CITAS WHERE estado = 'Pendiente'", {type: sequelize.QueryTypes.SELECT})
    return (citas => res.json(citas));     
}
exports.cancelarCita = async(req, res) =>{
    const id = req.body;   
    await sequelize.query(`DELETE FROM CITAS WHERE id_cliente = ${id}`, {type: sequelize.QueryTypes.DELETE})
    return (citas => res.json(citas))  
}
