const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const User = require("../models/User");


const usersController = {

	//para entrar a su perfil
	profile: (req, res) => {
		res.render("userPage")
	},

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
		let userInDataBase = User.findByField("user_name", req.body.user_name);

		if(userInDataBase) {
			return res.render("register", {
				errors: {
					user_name: {
						msg: "Este usuario ya esta creado"
					}
				},
				oldData : req.body
			});
		}
		else {
		let newUser={
			...req.body,
			password: bcrypt.hashSync(req.body.password, 10),
			confirm_password: bcrypt.hashSync(req.body.confirm_password, 10),
		}
		let userCreated = User.create(newUser);
		res.redirect('/users/login/');
		}},

	login:(req,res)=>{
		res.render('login')
	},

	loginProcess: (req, res)=>{
		let resultValidationLogin = validationResult(req);
		
		if (resultValidationLogin.errors.length > 0){
			return res.render("login", {
				errors:resultValidationLogin.mapped()
			});
		}
		
	},
		/* console.log("user" + req.body.password);

		const userToLogin = users.find(oneUser => oneUser.email === req.body.email);

		console.log("pass" + userToLogin.password)
		if(userToLogin){
			const isPasswordCorrect = bcrypt.compareSync(req.body.password, userToLogin.password)
			if(isPasswordCorrect){
				delete userToLogin.password;
				
				req.session.userLogged= userToLogin;
			
				if(req.body.recordame != undefined){
			
				res.cookie("recordame", req.session.userLogged.email, {maxAge: 100000})
				}
			return res.redirect('/');
			}
		}*/
		//return res.redirect('/');

	


};

module.exports = usersController;