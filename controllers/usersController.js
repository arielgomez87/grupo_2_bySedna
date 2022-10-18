const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const User = require("../models/User");


const usersController = {

	// Create - Form to create
	register: (req, res) => {
		res.render('register')
	},
	
	// Create -  Method to create
	processRegisterNewUser: (req, res) => {

		let resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0){
			return res.render("register", {
				errors:resultValidation.mapped(),
				oldData:req.body
			});
		} 
		let userInDataBase = User.findByField("email", req.body.email);

		if(userInDataBase) {
			return res.render("register", {
				errors: {
					email: {
						msg: "Este email ya esta creado"
					}
				},
				oldData : req.body
			});
		}
		else {
		let newUser={
			...req.body,
			password: bcrypt.hashSync(req.body.password, 10),
		}
		let userCreated = User.create(newUser);
		res.redirect('/users/login/');
		}},

	login:(req,res)=>{
		res.render('login')
	},

	loginProcess: (req, res)=>{
		let userToLogin = User.findByField("email", req.body.email);
		if(userToLogin){
			let thePasswordIsOk = bcrypt.compareSync(req.body.password, userToLogin.password)
			if(thePasswordIsOk){
				delete userToLogin.password;     //elimina la passsword de la info que devuelve y no la veo en session
				req.session.userLogged = userToLogin;
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
		res.render("userPage", {
			user: req.session.userLogged  // envia a la vista los datos del usuario logueado y los puedo usar en la vista
		});

	},

	logout: (req, res) => {
		req.session.destroy();
		return res.redirect("/");  /** destruye la session por lo tanto de cierra la session y salis del login */
	}

	
};

module.exports = usersController;