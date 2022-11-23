const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const User = require("../database/models/OldUser");


const usersController = {

	// Create - Form to create
	register: (req, res) => {
		return res.render('register')
	},
	
	// Create -  Method to create
	processRegisterNewUser: (req, res) => {

		let resultValidation = validationResult(req);/*sirve para capturar las validaciones y me trae los datos en un array*/
		
		if (resultValidation.errors.length > 0){ /**errors es una propiedad de validation results */
			return res.render("register", {
				errors:resultValidation.mapped(), /**.mapped convierte el array en un objeto literal **/
				oldData:req.body
			});
		} 
		let userInDataBase = User.findByField("email", req.body.email);

		if(userInDataBase) {
			return res.render("register", {
				errors: {
					email: {
						msg: "Este email ya esta registrado"
					}
				},
				oldData : req.body
			});
		}
		else {
		let newUser={
			...req.body,
			password: bcrypt.hashSync(req.body.password, 10),
			imageUser: req.file.filename
		}
		let userCreated = User.create(newUser);
		return res.redirect('/users/login/');
		}},

	login:(req,res)=>{
		return res.render('login')
	},

	loginProcess: (req, res)=>{
		let userToLogin = User.findByField("email", req.body.email);
		if(userToLogin){
			let thePasswordIsOk = bcrypt.compareSync(req.body.password, userToLogin.password)
			if(thePasswordIsOk){
				delete userToLogin.password;     //elimina la passsword de la info que devuelve y no la veo en session
				req.session.userLogged = userToLogin;

				if(req.body.remember_user){
					res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 2})
				}

				return res.redirect ("/users/profile")  //si esta correcto email y contraseña redirige
			}
			return res.render("login",{ 
				errors:{
					email: {
						msg: "Verifica  todos tus datos" //si esta incorrecta la contraseña muestra ese mensaje
		}}});
	}
		
		return res.render("login",{ 
		errors:{
			email: {
				msg: "Verifica tu Email"  // si esta mal el Email muestra ese mensaje
			}
		}
		})
	},

	//para entrar a su perfil
	profile: (req, res) => {
		return res.render("userPage", {
			user: req.session.userLogged  // envia a la vista los datos del usuario logueado y los puedo usar en la vista
		});

	},

	logout: (req, res) => {
		res.clearCookie("userEmail");
		req.session.destroy();
		return res.redirect("/");  /** destruye la session por lo tanto de cierra la session y salis del login */
	}

};

module.exports = usersController;