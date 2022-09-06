const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const indexController = {
    home: (req,res)=>
        res.render('home', {products}),
    login: (req, res)=>
        res.render('login'),
    register: (req, res)=>
        res.render('register'),
    cart: (req, res) => {
        res.render('cart');
    }   
}

module.exports = indexController;