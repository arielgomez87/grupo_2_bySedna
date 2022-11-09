
module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        fullName: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        phoneNumber: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(90),
            allowNull: false
        },
        provinceId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        rolId: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName: "user",
        timestamps: false
    };

const User = sequelize.define(alias, cols, config);

User.associate = function(models) {
    User.belongsTo(models.Rol, {
        as: 'rols',
        foreignKey: 'rolId'
    });
}

User.associate = function(models) {
    User.belongsTo(models.Province, {
        as: 'Provinces',
        foreignKey: 'provinceId'
    });
}

    return User; 
}