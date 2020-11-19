const sequelize = require('../models/index.js');


exports.registro = async (req, res) =>{
    
    
    let user = await user.create({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        nacimiento: req.body.nacimiento,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        covid: req.body.covid,
        password: req.body.password,
        email: req.body.email,
        dni: req.body.dni
    })
    res.json({"message": 'usuario creado'}); 
};

exports.login = async (req, res)=>{
    const{user, password} = req.body;
    if(!user || !password) return res.json({error: 'faltan datos'});
    const data = await users.find(e => e.user === user && e.password === password);
    if(!data) return res.json({error: 'ningún usuario coincide con tu usuario y contraseña'});
    return data;
};
