const sequelize = require('../models/index.js');


exports.registro = async (req, res) =>{
    let {nombre, apellidos, nacimiento, telefono, direccion, covid, password, email, dni} = req.body;
    await sequelize.query(`INSERT INTO USUARIOS (name, password, last_name, email, role, address, dni, born, covid, 
        history_id, observations, defaulter, createdAt, updatedAt)
        VALUES ('${nombre}', '${apellidos}', '${nacimiento}', '${telefono}', '${direccion}', '${covid}', 
        '${password}', '${email}', ${dni}, ${history_id})`, {type: sequelize.QueryTypes.INSERT})
    res.json({"message": 'usuario creado'}); 
};

exports.login = async (req, res)=>{
    const{user, password} = req.body;
    if(!user || !password) return res.json({error: 'faltan datos'});
    const data = users.find(e => e.user === user && e.password === password);
    if(!data) return res.json({error: 'ningún usuario coincide con tu usuario y contraseña'});
    return data;
};
