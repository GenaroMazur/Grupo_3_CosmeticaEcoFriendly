module.exports =function(sequelize,DataTypes){
    let name = "Product"
    let cols = {

    }
    let config = {
        tableName : "",
        timeStamps :false
    }

    let Product = sequelize.define(name,cols,config)

    return Product
}