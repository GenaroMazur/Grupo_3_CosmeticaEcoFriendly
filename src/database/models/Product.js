module.exports = function (sequelize, DataTypes) {
    let name = "Product"
    let cols = {
        "nameProduct": {
            "type": DataTypes.STRING
        },
        "price": {
            "type": DataTypes.INTEGER
        },
        "description": {
            "type": DataTypes.STRING
        },
        "modeOfUse": {
            "type": DataTypes.STRING
        },
        "ingredients": {
            "type": DataTypes.STRING
        },
        "grams": {
            "type": DataTypes.INTEGER
        },
        "idFragrance": {
            "type": DataTypes.INTEGER
        },
        "idCategory": {
            "type": DataTypes.INTEGER
        },
        "Image": {
            "type": DataTypes.INTEGER
        },
        "dateCreation": {
            "type": DataTypes.DATE
        }
    }
    let config = {
        "tableName": "Products",
        "timeStamps": false
    }

    let Product = sequelize.define(name, cols, config)

    //.associate = function (models) {
        
    // }
    
    return Product
}