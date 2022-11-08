module.exports = (sequelize, dataTypes) => {
    let alias = "Images";
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

    return Image; 
}