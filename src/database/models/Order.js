module.exports = function (sequelize, DataTypes) {
    const name = "Order"
    const cols = {
        "idProduct": {
            "type": DataTypes.INTEGER
        },
        "idUser": {
            "type": DataTypes.INTEGER
        },
        "idDelivery": {
            "type": DataTypes.INTEGER
        }
    }
    const config = {
        "tableName": "orders",
        "timestamps": false
    }

    const Order = sequelize.define(name, cols, config)
    Order.associate = function (models) {
        Order.belongsTo(models.Product,{
            "as":"product",
            "foreignKey": "idProduct"
        })

        Order.belongsTo(models.User,{
            "as": "ordersUsers",
            "foreignKey": "idUser"
        })
        
        Order.belongsTo(models.Delivery,{
            "as": "delivery",
            "foreignKey": "idDelivery"
        })

        Order.belongsToMany(models.Cart,{
            "as": "cart",
            "through": "orderCart",
            "foreignKey": "idOrder",
            "otherKey": "idCart",
            "timestamps": false
        })
    }

    return Order
}