module.exports = (sequelize, dataTypes) => {
    let alias = "Rols";
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
    }

    let config = {
        tableName: "rol",
        timestamps: false
    }

const Rol = sequelize.define(alias, cols, config);

Rol.associate = function(models) {
    Rol.hasMany(models.User, {
        as: 'users',
        foreignKey: 'rolId'
    });
}

    return Rol; 
}