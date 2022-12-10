const { body } = require("express-validator");
const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const Product = require("../database/models/Product");


const productController = {

	create: async function(req, res) {
			await db.Size.findAll()
			.then(function(sizes){
				return res.render('productCreate', {sizes});
		})
	},

	store: async function (req, res) {
		const newProduct = await db.Product.create({
			name: req.body.name,		//todo esto se podria abreviar con un "...req.body"//
			price: req.body.price,
			discount: req.body.discount,
        	description: req.body.description,
		});

		await db.Image.create({
		name: req.file.filename,
		productId: newProduct.id
		});
		
		await db.Product_size.create({
			sizeId: req.body.size,
			productId: newProduct.id
		})

		
		// newProduct.product-image
		// 		image: req.file? req.file.filename : "MZA07660.jpg"
		

		res.redirect('/products');
	},
	products: function(req, res) {
		db.Product.findAll({
			include: [{association: 'image'},{association: 'productSize'}]
		})
			.then(function(Product) {
				res.render('products', {products: Product})
				//res.json(Product) API
			})
	},
 	detail: function(req, res){
		db.Product.findByPk(req.params.id, {
			include: [{association: 'image'},{association: 'productSize'}]
		})
			.then(function(Product) {
				//console.log(Product.image[0].dataValues.name)
				//console.log(Product.productSize[0].dataValues.name)
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