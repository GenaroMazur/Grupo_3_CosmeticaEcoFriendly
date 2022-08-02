module.exports = function (sequelize, DataTypes) {
    let name = "Fragrance"
    let cols = {
        "name": {
            "type": DataTypes.STRING
        }
    }
    let config = {
        "tableName": "Fragrance",
        "timeStamps": false
    }
    const Fragrance = sequelize.define(name, cols, config);

    Fragrance.associate(models => {

    })

    return Fragrance
}