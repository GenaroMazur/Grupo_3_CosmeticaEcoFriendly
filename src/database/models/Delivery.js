module.exports = function (sequelize, DataTypes) {
    let name = "Delivery"
    let cols = {
        "postalCode": {
            "type":DataTypes.INTEGER,
            "allowNull": false
        },
        "locality": {
            "type": DataTypes.STRING(25),
            "allowNull": false
        },
        "province": {
            "type": DataTypes.STRING(25),
            "allowNull": false
        },
        "price": {
            "type": DataTypes.INTEGER,
            "allowNull": false
        }
    }
    let config = {
        "tableName": "delivery",
        "timestamps": false
    }
    
    const Delivery = sequelize.define(name, cols, config);

    Delivery.associate = function (models) {

        Delivery.hasMany(models.User,{
            "as":"ubication",
            "foreignKey":"postalCode"
        })

        Delivery.hasMany(models.ProductUser,{
            "as":"status",
            "foreignKey":"idDelivery"
        })
    }

    return Delivery
}