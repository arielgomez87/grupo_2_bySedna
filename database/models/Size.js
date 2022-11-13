module.exports = (sequelize, dataTypes) => {
    let alias = "Size";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    };

    let config = {
        tableName: "size",
        timestamps: false
    };

const Size = sequelize.define(alias, cols, config);

Size.associate = function(models) {
Size.belongsToMany(models.Product, {
    as:"products",
    through: "product_size",
    foreignKey: "sizeId",
    otherKey:"productId",
    timestamps: false
})
}
    return Size; 
}