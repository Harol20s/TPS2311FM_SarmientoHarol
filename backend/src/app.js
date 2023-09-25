
const harol = {
    apodo: 'h',
    edad: 19,
};

//const apodo = harol.apodo;
//const edad = harol.edad;

const {apodo, edad  } = harol;

app.use (express.json());
app.use (express.urlencoded ({ extended: true}));

//db


connection.connect((err)=>{
    if(err) throw err;
    console.log('bd conectada')
});

//const querySQL = 'SHOW TABLES';'';

// connection.query (querySQL, (err, res)=> {
    //if (err) throw err;
    //console.log('respuesta sql', res);
//})

const insertQuery = `INSERT INTO User(first_name, age) VALUES('juan', '30');`;

connection.query(insertQuery, (err, res)=>{
    if(err) throw err;
    console.log('respuesta insert', res)
})

const getQuery = `SELECT * FROM User;`;

connection.query(getQuery, (err, res) =>{
    if(err) throw err;
    console.log('respuesta get', res)
})

app.listen(3000, ()=>{
    console.log('Servidor encendido');
});



