const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const Product = require("../database/models/Product");


const productController = {

	create: function(req, res) {
		db.Product.findAll()
			.then(function(Product) {
				return res.render('productCreate', {Product});
			})
	},

	store: function (req, res) {
		db.Product.create({
			name: req.body.name,		//todo esto se podria abreviar con un "...req.body"//
			price: req.body.price,
			discount: req.body.discount,
        	size: req.body.size,
        	description: req.body.description,
			image: req.file? req.file.filename : "MZA07660.jpg"
		});

		res.redirect('/productCreate');
	},
	products: function(req, res) {
		db.Product.findAll({
			include: [{association: 'image'},{association: 'productSize'}]
		})
			.then(function(Product) {
				res.render('products', {products: Product})
			})
	},
 	detail: function(req, res){
		db.Product.findByPk(req.params.id, {
			include: [{association: 'image'},{association: 'productSize'}]
		})
			.then(function(Product) {
				res.render('productDetail', {product: Product})
			})
	},
	edit: function(req, res){
			let product = db.Product.findByPk(req.params.id);

			let image = db.Image.findAll();
			let productSize = db.Product_size.findAll();

			Promise.all([product, image, productSize])
				.then(function([product, image, productSize]){
					res.render('productEdit', {product: product, image: image, productSize: productSize})

				})
	},
	update: function(req, res){
		db.Product.update({
			name: req.body.name,		//todo esto se podria abreviar con un "...req.body"//
			price: req.body.price,
			discount: req.body.discount,
        	size: req.body.size,
        	description: req.body.description,
			image: req.file? req.file.filename : "MZA07660.jpg"
		},{
			where: {
				id: req.params.id
			}
		})

		res.redirect('productsDetail/'+ req.params.id)

	},
	delete: function(req, res){
		db.Product.destroy({
			where: {
				id: req.params.id
			}
		})
		res.redirect('products');
	}

}

module.exports = productController;