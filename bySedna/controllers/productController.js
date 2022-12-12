const { body } = require("express-validator");
const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const Product = require("../database/models/Product");
const { validationResult } = require("express-validator");


const productController = {

	create: async function(req, res) {
			await db.Size.findAll()
			.then(function(sizes){
				return res.render('productCreate', {sizes});
		})
	},

	store: async function (req, res) {
		let errors = validationResult(req)
		if (!errors.isEmpty()) {
		  const sizes = await db.Size.findAll()
		  
		  return res.render("productCreate", {
			errors: errors.mapped(), /**.mapped convierte el array en un objeto literal **/
			oldData: req.body,
			sizes
		  })
		};

		//si el Formulario no tiene nada en imagen se guarda una generica de default
	const imgProduct = req.file
      ? req.file.filename
      : "MZA07660.jpg";
    
		const newProduct = await db.Product.create({
			name: req.body.name,		//todo esto se podria abreviar con un "...req.body"//
			price: req.body.price,
			discount: req.body.discount,
        	description: req.body.description,
		});
		
		await db.Image.create({
		name: imgProduct,
		productId: newProduct.id
		});
		
		req.body.sizes.forEach(async talle => {
			await db.Product_size.create({
				sizeId: talle,
				productId: newProduct.id
			})
		});
		
		res.redirect('/products');
	},

	products: function(req, res) {
		db.Product.findAll({
			include: [{association: 'image'},{association: 'productSize'}]
		})
			.then(function(product) {
				res.render('products', {products: product})
				//res.json(Product) API
			})
	},
 	detail: function(req, res){
		const detalle = db.Product.findByPk(req.params.id, {
			include: [{association: 'image'},{association: 'productSize'}]
		})
		
			.then(function(product) {
				//console.log(Product.image[0].dataValues.name)
				const talles = product.productSize.map(function (talle){
					return {
						id:talle.id, name:talle.name
					}
				})
				
				res.render('productDetail', {product: product, talles})
			})
			
	},

	edit: function(req, res){
		const editar = db.Product.findByPk(req.params.id, {
			include: [{association: 'image'},{association: 'productSize'}]
		})
			.then(function(product) {
					 db.Size.findAll()
					.then(function(sizes){
						return res.render('productEdit', {product: product, sizes});
				})
			})
	},

	update: async function(req, res){
        const productUpdate = await db.Product.update(
			{
			  name: req.body.name,
			  price: req.body.price,
			  discount: req.body.discount,
			  description: req.body.description,
			},
			{
			  where: {
				id: req.params.id,
			  },
			}
		  );
	  
		  // Busco los talles en la tabla por id
		  const sizesToUpdate = await db.Size.findAll({
			where: { id: req.body.sizes },
		  });
	  
		  // Creo un objeto con los filtros para buscar el producto
		  const filter = {
			where: {
			  id: req.params.id,
			},
			include: [{ association: "productSize" }],
		  };
	  
		  // Busco el producto
		  await db.Product.findOne(filter).then((product) => {
			// Actualizo los talles del producto (approach usando OOP - Object Oriented Programming)
			product.setProductSize(sizesToUpdate);
		  });
	  
		  res.redirect("/products");

	},

	delete: function(req, res){

		db.Product_size.destroy({
			where: {
				productId: req.params.id
			}
		})
		db.Image.destroy({
			where:{
				productId: req.params.id
			}
		})
		db.Product.destroy({
			where: {
				id: req.params.id
			}
		})
		return res.redirect('/products');
	}

}

module.exports = productController;