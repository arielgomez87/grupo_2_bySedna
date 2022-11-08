const { privateDecrypt } = require("crypto");

module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        price: {
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING(250),
            allowNull: false
        }
    };

    let config = {
        tableName: "product",
        timestamps: false
    };

const Product = sequelize.define(alias, cols, config);

    return Product; 
}