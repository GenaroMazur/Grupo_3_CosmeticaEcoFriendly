module.exports = function (sequelize, DataTypes) {
    let name = "Product"
    let cols = {
        "nameProduct": {
            "type": DataTypes.STRING(40),
            "allowNull": false
        },
        "price": {
            "type": DataTypes.INTEGER,
            "allowNull": false
        },
        "descriptionProduct": {
            "type": DataTypes.TEXT,
            "allowNull": false
        },
        "modeOfUse": {
            "type": DataTypes.TEXT,
            "allowNull": false
        },
        "ingredients": {
            "type": DataTypes.TEXT,
            "allowNull": false
        },
        "grams": {
            "type": DataTypes.INTEGER,
            "allowNull": false
        },
        "idFragrance": {
            "type": DataTypes.INTEGER
        },
        "idCategory": {
            "type": DataTypes.INTEGER
        },
        "Image": {
            "type": DataTypes.STRING(60)
        },
        "dateCreation": {
            "type": DataTypes.DATE
        }
    }
    let config = {
        "tableName": "products",
        "timestamps": false
    }

    let Product = sequelize.define(name, cols, config)

    Product.associate = function (models) {
        Product.belongsTo(models.Category,{
            "as":"category",
            "foreignKey":"idCategory"
        })
        
        Product.belongsTo(models.Fragrance,{
            "as":"fragrance",
            "foreignKey":"idFragrance"
        })

        Product.belongsToMany(models.User,{
            "througt":"productUser",
            "foreignKey":"idProduct",
            "otherKey":"idUser",
            "as":"ProductUser"
        })
    }
    
    return Product
}