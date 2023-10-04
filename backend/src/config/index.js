<<<<<<< HEAD
const app = require ('./app'); 
const database = require('./database');

const main = () => {

    database.connect((err)=> {
        if (err) throw err;
        console.log('base de datos conectada');
    });

    app.listen(3000, ()=>{
        console.log('Servidor escuchando puerto 3000');
    });
=======
const app = require('./app');
const database = require('./database');

const main = () => {
  database.connect((err) => {
    if (err) throw err;
    console.log('base de datos conectada')
  });

  app.listen(3000, () => {
    console.log('servidor escuchando puerto 3000')
  })
>>>>>>> dfd8508b0ea2201cdb07f8f89262ff33cece12fa
};

main();