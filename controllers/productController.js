const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    products: (req,res)=>
    res.render("products", {products}),

    details: (req, res) => {
		let id = req.params.id;
		let product = products.find(oneProduct => oneProduct.id == id);
		res.render("productDetail", {product})
	},

	create: (req, res) => {
		res.render("productCreate")
	},

	store: (req, res) =>{
		let newProduct = {
			id: products[products.length - 1].id + 1,
			name: req.body.name,		//todo esto se podria abreviar con un "...req.body"//
			price: req.body.price,
			discount: req.body.discount,
        	size: req.body.size,
        	description: req.body.description,
			image: req.file? req.file.filename : "MZA07660.jpg"
		}
			products.push(newProduct);  /*agrego el ultimo producto al array productos*/
			fs.writeFileSync(productsFilePath, JSON.stringify(products, null," "));/*hago stringify de los valores nuevos 
														del producto para que pueda la base de datos manejarlos*/ 
		res.redirect("/products/");
	},

	edit: (req, res) =>{
		let id = req.params.id;
		let product = products.find(oneProduct => oneProduct.id == id);
		res.render("productEdit" ,{product})
	},

	//update: (req, res) =>{
	//	let id = req.params.id
	//	let productToEdit = products.find
	//},

	destroy: (req, res) =>{
		res.render("productCreate")
	}

}

module.exports = productController;