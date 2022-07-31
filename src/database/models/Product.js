module.exports =function(sequelize,DataTypes){
    let name = "Product"
    let cols = {
        nameProduct : {
            type : DataTypes.VARCHAR
        },
        price : {
            type : DataTypes.INTEGER
        },
        description: {
            type : DataTypes.TEXT
        },
        modeOfUse: {
            type : DataTypes.TEXT
        },
        ingredients: {
            type : DataTypes.TEXT
        },
        grams: {
            type : DataTypes.INTEGER
        },
        idFragrance: {
            type : DataTypes.INTEGER
        },
        idCategory: {
            type : DataTypes.INTEGER
        },
        Image: {
            type : DataTypes.INTEGER
        },
    }
    let config = {
        tableName : "Products",
        timeStamps :false
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