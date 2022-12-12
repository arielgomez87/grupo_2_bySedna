const db = require("../../database/models");

const categoriesControllerApi = {

    categories: function(req, res) {
		db.Category.findAll({

		})
			.then(function(Category) {
				res.status(200).json({
					total: Category.length,
					data: Category,
					status: 200
				})
			})
	}

};

module.exports = categoriesControllerApi;
