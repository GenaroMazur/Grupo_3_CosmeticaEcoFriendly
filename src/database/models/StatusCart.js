module.exports = function (sequelize, DataTypes) {
    const name = "StatusCart"
    const cols = {
        "name": {
            "type": DataTypes.STRING
        }
    }
    const config = {
        "tableName": "StatusCart",
        "timeStamps": false
    }

    const StatusCart = sequelize.define(name, cols, config)
    StatusCart.associate(models => {

    })

    return StatusCart
}