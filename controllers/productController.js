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

	update: (req, res) =>{
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)

			productToEdit = {
				id: productToEdit.id,
				...req.body,
				image: productToEdit.image
			};

		let newProducts = products.map(product => {
			if (product.id == productToEdit.id){
				return product = {...productToEdit}
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, " "));
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); //PROVISORIO//
		res.redirect("/products/")
		},

	destroy: (req, res) =>{{
		let id = req.params.id
		let finalProducts = products.filter(product => product.id != id)
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); //PROVISORIO//
		res.redirect("/products/");
	}
	}

}

module.exports = productController;