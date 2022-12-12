const { body } = require("express-validator");
const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const Product = require("../../database/models/Product");


const productControllerApi = {
	products: function(req, res) {
		db.Product.findAll({
			include: [{association: 'image'},{association: 'productSize'},{association: 'category'}]
		})
			.then(function(Product) {
				res.status(200).json({
					total: Product.length,
					data: Product,
					status: 200
				})
			})
	},
 	detail: function(req, res){
		db.Product.findByPk(req.params.id, {
			include: [{association: 'image'},{association: 'productSize'}]
		})
			.then(function(Product) {
				//console.log(Product.image[0].dataValues.name)
				//console.log(Product.productSize[0].dataValues.name)
				res.status(200).json({
					data: Product,
					status: 200
				})
			})
	}

}

module.exports = productControllerApi;