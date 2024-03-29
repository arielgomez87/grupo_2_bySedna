module.exports = (sequelize, dataTypes) => {
    let alias = "Image";
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
        productId: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "image",
        timestamps: false
    };

const Image = sequelize.define(alias, cols, config);

Image.associate = function(models){
    Image.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product" //cada imagen tiene un solo producto, por eso en singular.
    })
}

    return Image; 
}