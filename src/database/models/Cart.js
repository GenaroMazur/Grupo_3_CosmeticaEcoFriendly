module.exports = function (sequelize, DataTypes) {
    const name = "Cart"
    const cols = {
        "idUser": {
            "type": DataTypes.INTEGER
        },
        "quantity": {
            "type": DataTypes.INTEGER
        },
        "totalPrice": {
            "type": DataTypes.INTEGER
        },
        "idStatus": {
            "type": DataTypes.INTEGER
        }
    }
    const config = {
        "tableName": "Cart",
        "timeStamps": false
    }

    const Cart = sequelize.define(name, cols, config)
    Cart.associate(models => {

    })

    return Cart
}