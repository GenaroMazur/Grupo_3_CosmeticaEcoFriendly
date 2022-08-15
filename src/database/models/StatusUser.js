module.exports = function (sequelize, DataTypes) {
    const name = "StatusUser"
    const cols = {
        "nameStatus": {
            "type": DataTypes.STRING(15),
            "defaultValue": "User"
        }
    }
    const config = {
        "tableName": "statusUsers",
        "timestamps": false
    }

    const StatusUser = sequelize.define(name, cols, config)
    StatusUser.associate = function (models) {
        StatusUser.hasMany(models.User,{
            "as":"status",
            "foreignKey":"idStatusUser"
        })
    }
    return StatusUser
}