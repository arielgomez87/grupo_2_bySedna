const User = require("../models/User")  //traigo el modelo con todos las operaciones de la base de datos

function userLoggedMiddleware(req, res, next) {  //funciona cuando el usuario esta logeado y muestra el logout del navbar
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail; //dandole a este middleware de aplicacion la cookie, 
                         // la cookie del usuario va a viajar por toda la pagina
                         
    let userFromCookie = User.findByField("email", emailInCookie) //Busco ese usuario que esta en la cookie en la base de datos

    if (userFromCookie) {
        req.session.userLogged = userFromCookie; //si encuentra al usuario en la base de dato lo mantiene en la session
    }

    if (req.session && req.session.userLogged) {    //si el usuario esta loggeado se activa este middleware
        res.locals.isLogged = true       //renderiza variable locales aca podria enviar por ejemplo la                                   
    }                                               //imagen o el nombre para que aparezca cuando el usuario esta logueado

    next();
}

module.exports = userLoggedMiddleware;
