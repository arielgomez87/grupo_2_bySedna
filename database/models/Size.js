module.exports = (sequelize, dataTypes) => {
    let alias = "Sizes";
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

    return Size; 
}