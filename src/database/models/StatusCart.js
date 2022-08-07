module.exports = function (sequelize, DataTypes) {
    const name = "StatusCart"
    const cols = {
        "nameStatusCart": {
            "type": DataTypes.STRING(15),
            "allowNull":false
        }
    }
    const config = {
        "tableName": "statusCart"
    }

    const StatusCart = sequelize.define(name, cols, config)
    StatusCart.associate = function (models) {
        StatusCart.hasMany(models.Cart,{
            "as":"status",
            "foreignKey":"idStatus"
        })
    }

    return StatusCart
}