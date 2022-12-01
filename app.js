const express = require('express');
const app = express();
const cookies = require('cookie-parser');
const path = require('path');
//const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')
const methodOverride = require('method-override');
const session = require("express-session");

app.listen(3000, ()=>{console.log('Server Running on port 3000')});

app.use(express.urlencoded({extended:false})); /*para poder recibir todos los datos de los formularios 
                                                    (indica que vas a trabajar en formularios)*/
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.json()); /*para usar json dentro de los archivos*/

app.use(session({  //middleware de aplicacion de session
    secret: "Secreto!!",
    resave: false,
    saveUninitialized: false,
}))

app.use(cookies());

//app.use(userLoggedMiddleware);

app.use(methodOverride('_method')); //sirve para indicar en el formulario que es un put, path o un delete.


//Routing
const indexRouter = require('./routes/indexRoutes');
app.use('/', indexRouter);

const productRouter = require('./routes/productRoutes');
app.use('/products', productRouter);

const usersRouter = require('./routes/usersRoutes');
const { use } = require('./routes/indexRoutes');

app.use('/users', usersRouter)

app.use((req, res) => {
    res.status(404).render("notFound");})