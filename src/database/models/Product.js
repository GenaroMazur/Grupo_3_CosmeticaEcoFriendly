module.exports =function(sequelize,DataTypes){
    let name = "Product"
    let cols = {
        "nameProduct" : {
            "type" : DataTypes.STRING
        },
        "price" : {
            "type" : DataTypes.INTEGER
        },
        "description": {
            "type" : DataTypes.STRING
        },
        "modeOfUse": {
            "type" : DataTypes.STRING
        },
        "ingredients": {
            "type" : DataTypes.STRING
        },
        "grams": {
            "type" : DataTypes.INTEGER
        },
        "idFragrance": {
            "type" : DataTypes.INTEGER
        },
        "idCategory": {
            "type" : DataTypes.INTEGER
        },
        "Image": {
            "type" : DataTypes.INTEGER
        },
        "dateCreation" : {
            "type" : DataTypes.DATE
        }
    }
    let config = {
        "tableName" : "Products",
        "timeStamps" :false
    }

    let Product = sequelize.define(name,cols,config)

    Product.associate(models=>{
        Product.belonsTo(models.Fragrance,{
            "as":"fragrance",
            "foreingKey" : "idFragrance"
        })
        Product.belonsTo(models.Category,{
            "as" : "category",
            "foreingKey" : "idCategory"
        })
        Product.belonsTo(models.Image,{
            "as":"image",
            "foreingKey" : "Image"
        })
    })
    return Product
}