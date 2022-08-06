module.exports = function (sequelize, DataTypes) {
    let name = "Category"
    let cols = {
        "categoryName": {
            "type": DataTypes.STRING
        },
        "description": {
            "type": DataTypes.STRING
        },
        "image": {
            "type": DataTypes.STRING
        }
    }
    let config = {
        "tableName": "Category",
        "timeStamps": false
    }
    const Category = sequelize.define(name, cols, config);

    //.associate = function (models) {
        
    // }

    return Category
}