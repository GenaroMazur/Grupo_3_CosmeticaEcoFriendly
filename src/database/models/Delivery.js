module.exports = function (sequelize, DataTypes) {
    let name = "Delivery"
    let cols = {
        "locality": {
            "type": DataTypes.STRING
        },
        "province": {
            "type": DataTypes.STRING
        },
        "price": {
            "type": DataTypes.INTEGER
        }
    }
    let config = {
        "tableName": "Delivery",
        "timeStamps": false
    }
    const Delivery = sequelize.define(name, cols, config);

    Delivery.associate(models => {

    })

    return Delivery
}