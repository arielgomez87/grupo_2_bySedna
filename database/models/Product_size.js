module.exports = (sequelize, dataTypes) => {
    let alias = "Product_sizes";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        sizeId: {
            type: dataTypes.INTEGER,
        },
        productId: {
            type: dataTypes.INTEGER,
        }
    };

    let config = {
        tableName: "product_size",
        timestamps: false
    };

const Product_size = sequelize.define(alias, cols, config);

    return Product_size; 
}