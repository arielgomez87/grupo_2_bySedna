const fs = require('fs');
const path = require('path');
const db = require("../database/models");
const Product = require("../database/models/Product");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const indexController = {
	home: function(req, res) {
		db.Product.findAll({
			include: [{association: 'image'},{association: 'productSize'},{association: 'category'}]
		})
			.then(function(product) {
				res.render('home', {products: product})
				//res.json(Product) API
			})
			
	},
    cart: (req, res) => {
        res.render('cart');
    }   
}

module.exports = indexController;