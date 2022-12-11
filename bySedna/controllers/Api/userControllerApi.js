const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../../database/models");

const usersControllerApi = {

    users: function(req, res) {
		db.User.findAll({

		})
			.then(function(user) {
				res.json(user)
			})
	},

};

module.exports = usersControllerApi;
