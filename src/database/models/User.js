module.exports = function (sequelize, DataTypes) {
    let name = "User"
    let cols = {
        "dateCreation": {
            "type": DataTypes.DATE,
            "allowNull": false
        },
        "username": {
            "type": DataTypes.STRING(15),
            "allowNull":false
        },
        "lastname": {
            "type": DataTypes.STRING(15),
            "allowNull":false
        },
        "passwordUser": {
            "type": DataTypes.STRING(100),
            "allowNull":false
        },
        "email": {
            "type": DataTypes.STRING(45)
        },
        "image": {
            "type": DataTypes.STRING(60)
        },
        "telephone": {
            "type": DataTypes.STRING(30)
        },
        "direction": {
            "type": DataTypes.STRING(50)
        },
        "idStatusUser": {
            "type": DataTypes.INTEGER
        },
        "postalCode": {
            "type": DataTypes.INTEGER
        },
    }
    let config = {
        "tableName": "users",
        "timestamps": false
    }

    let User = sequelize.define(name, cols, config)

    User.associate = function (models) {
        
        User.hasMany(models.Card,{
            "as": "cards",
            "foreignKey": "idUser"
        })

        User.belongsTo(models.StatusUser,{
            "as": "status",
            "foreignKey":"idStatusUser"
        })

        User.belongsTo(models.Delivery,{
            "as":"ubication",
            "foreignKey": "postalCode"
        })
         
        User.hasMany(models.Cart,{
            "as":"user",
            "foreignKey": "idUser"
        })
    }

    return User
}