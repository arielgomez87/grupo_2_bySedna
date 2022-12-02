
module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
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

Product.associate = function(models){
    Product.hasMany(models.Image, {
        foreignKey: "productId",
        as: "image"
    })

    Product.belongsToMany(models.Size, {
        as:"productSize",
        through: "product_size",
        foreignKey: "productId",
        otherKey:"sizeId",
        timestamps: false
    })
}

    return Product; 
}