module.exports = (sequelize, dataTypes) => {
    let alias = "Province";
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
        as: 'Users',  // cada provincia puede tener varios usuario por eso en plural
        foreignKey: 'provinceId'
    });
}

    return Province; 
}