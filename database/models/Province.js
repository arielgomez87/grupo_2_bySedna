module.exports = (sequelize, dataTypes) => {
    let alias = "Provinces";
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
        tableName: "province",
        timestamps: false
    }

const Province = sequelize.define(alias, cols, config);

Province.associate = function(models) {
    Province.hasMany(models.User, {
        as: 'Users',
        foreignKey: 'provinceId'
    });
}

    return Province; 
}