const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../../database/models");

const usersControllerApi = {

    users: function(req, res) {
		db.User.findAll({
			include: [{association: 'Province'}]

		})
			.then(function(User) {
				res.status(200).json({
					total: User.length,
					data: User,
					status: 200
				})
			})
	}

};

module.exports = usersControllerApi;
