module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    }

    let config = {
        tableName: "category",
        timestamps: false
    }

const Category = sequelize.define(alias, cols, config);

Category.associate = function(models) {
    Category.hasMany(models.Product, {
        foreignKey: "categoryId",
        as: "products"  // cada rol puede tener varios usuario por eso en plural
    });
}
    
    return Category; 
}