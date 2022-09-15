module.exports = function (sequelize, DataTypes) {
    let name = "Fragrance"
    let cols = {
        "nameFragrance": {
            "type": DataTypes.STRING(15),
            "allowNull": false
        }
    };
    let config = {
        "tableName": "fragrance",
        "timestamps": false
    };
    const Fragrance = sequelize.define(name, cols, config);

    Fragrance.associate = function (models) {

        Fragrance.hasMany(models.Product, {
            "as": "fragrance",
            "foreignKey": "idFragrance"
        });

    };

    return Fragrance
}