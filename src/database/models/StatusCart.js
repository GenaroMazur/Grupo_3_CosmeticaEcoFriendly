module.exports = function (sequelize, DataTypes) {
    const name = "StatusCart"
    const cols = {
        "nameStatusCart": {
            "type": DataTypes.STRING(15),
            "allowNull":false
        }
    }
    const config = {
        "tableName": "statusCart",
        "timestamps": false
    }

    const StatusCart = sequelize.define(name, cols, config)
    StatusCart.associate = function (models) {
        StatusCart.hasMany(models.ProductUser,{
            "as":"status",
            "foreignKey":"idStatus"
        })
    }

    return StatusCart
}