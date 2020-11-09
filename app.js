const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
app.use(express.json());
const routerUser = require('./routers/router_usuarios');
const routerCitas = require('./routers/router_citas');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'clinicaDental_db',
    password: '12345678'
})

//CORS
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/usuario', routerUser);
//app.use('/citas', routerCitas);


app.listen(4004, ()=> console.log('Servidor levantado en el puerto 4000'));