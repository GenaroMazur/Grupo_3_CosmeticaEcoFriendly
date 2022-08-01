module.exports =function(sequelize,DataTypes){
    let name = "User"
    let cols = {

    }
    let config = {
        tableName : "",
        timeStamps :false
    }

    let User = sequelize.define(name,cols,config)

    return Product
}