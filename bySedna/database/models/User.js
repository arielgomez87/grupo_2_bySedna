
module.exports = (sequelize, DataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: {
            type: DataTypes.STRING
        },
        imageUser: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        phoneNumber: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        provinceId: {
            type: DataTypes.INTEGER
        },
        rolId: {
            type: DataTypes.INTEGER
        }
    };

    let config = {
        tableName: "user",
        timestamps: false
    };

const User = sequelize.define(alias, cols, config);

 User.associate = function(models) {
    User.belongsTo(models.Rol, {
        as: 'rol',  //esta en singular porque cada usuario tiene un rol
        foreignKey: 'rolId'
    });
}

User.associate = function(models) {
    User.belongsTo(models.Province, {
        as: 'Province',  // esta en singular porque cada usuario tiene una sola provincia
        foreignKey: 'provinceId'
    });
}

    return User; 
}