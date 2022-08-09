module.exports = function (sequelize, DataTypes) {
    let name = "Category"
    let cols = {
        "categoryName": {
            "type": DataTypes.STRING(20),
            "allowNull": false
        },
        "descriptionCategory": {
            "type": DataTypes.TEXT
        },
        "image": {
            "type": DataTypes.STRING(60)
        }
    }
    let config = {
        "tableName": "category",
        "timestamps": false
    }
    const Category = sequelize.define(name, cols, config);

    Category.associate = function (models) {
        
        Category.belongsTo(models.Product,{
            "as":"category",
            "foreignKey":"idCategory"
        })

    }

    return Category
}