// CRUD

const readUser = (req, res) => {
    const {name,id} = req.params;

    console.log('Desde el controlador');
    
    res.send(` ${name}:${id} hola`); 
};

const createUser = (req,res) => {
    const {email, password} = req.body;
    res.send(`${email}:${password}`);
};

const updateUser = (req,res) => {
    res.send('Peticion PUT');
};

const deleteUSer = (req,res) => {
    res.send('Peticion DELETE');
};

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUSer,
};