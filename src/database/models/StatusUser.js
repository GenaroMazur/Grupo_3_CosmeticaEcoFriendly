module.exports = function (sequelize, DataTypes) {
    const name = "StatusUser"
    const cols = {
        "name": {
            "type": DataTypes.STRING
        }
    }
    const config = {
        "tableName": "StatusUsers",
        "timeStamps": false
    }

    const StatusUser = sequelize.define(name, cols, config)
    //.associate = function (models) {
        
    // }
    return StatusUser
}