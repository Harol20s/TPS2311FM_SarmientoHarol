const express = require('express');
const mysql2 = require('mysql2');

const app = express();

const harol = {
    apodo: 'h',
    edad: 19,
};

//const apodo = harol.apodo;
//const edad = harol.edad;

const {apodo, edad  } = harol;

app.use (express.json());
app.use (express.urlencoded ({ extended: true}));

app.get('/:name/:id', (req, res) =>{
    const {name,id} = req.params;

    res.send(` ${name}:${id} hola`);
});

app.post('/', (req, res) =>{
    const {email, password} = req.body;
    res.send(`${email}:${password}`);
});

app.put('/', (req, res) =>{
    res.send('Peticion PUT');
});

app.delete('/', (req, res) =>{
    res.send('Peticion DELETE');
});

//db

const connection = mysql2.createConnection ({
host: 'localhost',
user: 'root',
password: 'toor',
database: 'tutorial',
});

connection.connect((err)=>{
    if(err) throw err;
    console.log('bd conectada')
});

app.listen(3000, ()=>{
    console.log('Servidor encendido');
});



