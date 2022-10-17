const fs = require("fs");
const path = require("path");

function guestMiddleware (req, res, next){
    if( req.session.userLogged) {
			res.redirect('/users/profile');
        }
        next();
    }
    

module.exports = guestMiddleware;


/*middleware que hace que si el usuario ya se logeo en la wed no pueda ingresar mas al loggin el register
por lo tanto si esta logeado va a este middleware enviarlo al perfil*/