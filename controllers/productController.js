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
		res.render("productDetail", {products})
	},
}

module.exports = productController;