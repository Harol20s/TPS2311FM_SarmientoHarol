const express = require ("express");

const userRoutes = require('../routes/user.routes');

const app = express ();


// middelewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// endpoints
app.use('/user',userRoutes);
 
module.exports = app;





