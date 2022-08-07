module.exports = function (sequelize, DataTypes) {
    const name = "Cart"
    const cols = {
        "quantity": {
            "type": DataTypes.INTEGER,
            "allowNull": false
        },
        "totalPrice": {
            "type": DataTypes.INTEGER,
            "allowNull": false
        },
        "createAt": {
            "type": DataTypes.DATE,
            "allowNull": false
        },
        "idUser": {
            "type": DataTypes.INTEGER
        },
        "idStatus": {
            "type": DataTypes.INTEGER
        }
    }
    const config = {
        "tableName": "cart",
        "timestamps": false
    }

    const Cart = sequelize.define(name, cols, config)
    Cart.associate = function (models) {
        Cart.belongsTo(models.StatusCart,{
            "as":"status",
            "foreignKey":"idStatus"
        })
        Cart.belongsTo(models.User,{
            "as":"user",
            "idStatus":"idUser"
        })
        Cart.belongsToMany(models.Order,{
            "as":"cart",
            "through": "orderCart",
            "foreignKey": "idCart",
            "otherKey": "idOrder",
            "timestamps": false
        })
    }

    return Cart
}