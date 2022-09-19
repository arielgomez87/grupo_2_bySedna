const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
// const userLogMiddleware = require('./middlewares/userLogs')
const methodOverride = require('method-override');
const session = require("express-session");

app.listen(3000, ()=>{console.log('Server Running on port 3000')});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(session({
    secret: "Secreto!!",
    resave: false,
    saveUninitialized: true,
}))
app.use(cookieParser());
// app.listen(userLogMiddleware);
app.use(methodOverride('_method'));
app.use((req, res, next)=> {
    console.log("Pasaste por el middleware de aplicación");
    next();
})
  
//Routing
const indexRouter = require('./routes/indexRoutes');
app.use('/', indexRouter);

const productRouter = require('./routes/productRoutes');
app.use('/products', productRouter);

const usersRouter = require('./routes/usersRoutes');
 app.use('/users', usersRouter)