const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const usersController = {

	//para entrar a su perfil
	profile: (req, res) => {
		res.render("userPage")
	},

	// Create - Form to create
	register: (req, res) => {
		res.render('register')
	},
	
	// Create -  Method to store
	processRegisterNewUser: (req, res) => {

		let resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0){
			return res.render("register", {
				errors:resultValidation.mapped(),
				oldData:req.body
			});
		} else {
		let userToRegister = req.body;
		delete userToRegister.password_confirm;
		let newUser={
			id: users[users.length - 1].id + 1,
			...userToRegister,
			password: bcrypt.hashSync(userToRegister.password, 10),
			confirm_password: bcrypt.hashSync(userToRegister.password, 10)
		}
		users.push(newUser)
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
		res.redirect('/users/login/');
		}},

	login:(req,res)=>{
		res.render('login')
	},
	loginProcess: (req, res)=>{
		let resultValidationLogin = validationResult(req);
		
		if (resultValidationLogin.errors.length > 0){
			return res.render("login", {
				errors:resultValidationLogin.mapped(),
				oldData:req.body
			});

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

	}},


};

module.exports = usersController;