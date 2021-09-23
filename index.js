const express = require('express'); //de esta forma se importa en node 
const { dbConection } = require('./config/database');
const cors = require('cors');

//establecer las variables de entorno definidas en .env
require('dotenv').config();

//Creando el servidor express 
const app = express();

app.use(cors());

dbConection();
// VERIFICANDO VARIABLES DE ENTORNO
console.log(process.env);

//Para levantar el servidor 
app.listen(process.env.PORT, () => {
        console.log('Servidor corriendo en el puerto ' + process.env.PORT)
    })
    //Conexion a la BD 





//Rutas de la API 
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Bienvenidos a la App proyectos'
    });
});