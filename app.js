const express = require('express');
const app = express();

app.listen(3000, ()=>{console.log('Server Running on port 3000')});
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Routing
const indexRouter = require('./routes/indexRoutes');
app.use('/', indexRouter);