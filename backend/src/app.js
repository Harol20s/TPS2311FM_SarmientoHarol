const express = require('express');

const app = express();

const harol = {
    apodo: 'h',
    edad: 19,
};

//const apodo = harol.apodo;
//const edad = harol.edad;

const {apodo, edad  } = harol;

apodo

app.get('/:name/:id', (req, res) =>{
    const {name,id} = req.params;

    res.send(` ${name}:${id}`);
});

app.post('/', (req, res) =>{
    res.send('Peticion POST');
});

app.put('/', (req, res) =>{
    res.send('Peticion PUT');
});

app.delete('/', (req, res) =>{
    res.send('Peticion DELETE');
});


app.listen(3000, ()=>{
    console.log('Servidor encendido');
});



