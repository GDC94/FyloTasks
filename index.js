const express = require("express");
const conectarDB = require('./config/db');
const cors = require ("cors")




//Creamos el servidor
const app = express();

//despues de que se inicia express, nos conectamos a la base de datos 
conectarDB();

//Habilitamos el cors
app.use(cors());



//Habilitamos el middleware para leer formatos json 
app.use(express.json({extended: true}));

//Creamos eel puerto de la app. HEROKU nos pide esta variable
const port = process.env.port || 4000;

//Importamos las rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

app.listen(port,"0.0.0.0/0", () => {
    console.log(`El servidor esta funcionando en el puerto $port}`)
});

