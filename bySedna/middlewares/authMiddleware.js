const fs = require("fs");
const path = require("path");

function authMiddleware (req, res, next){
    if( ! req.session.userLogged) {
			return res.redirect('/users/login');
        }
        next();
    }
    

module.exports = authMiddleware;

/** si no tengo a nadie en session lo redirigo al login. si tengo a alguien entonces sigue la peticion*/ 