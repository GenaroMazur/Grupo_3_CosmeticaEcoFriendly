module.exports =function(sequelize,DataTypes){
    let name = "User"
    let cols = {
        "dataCreation":{
            type:DataTypes.DATE
        },
        "userName":{
            type:DataTypes.STRING
        },
        "lastName":{
            type:DataTypes.STRING
        },
        "email":{
            type:DataTypes.STRING
        },
        "userImage":{
            type:DataTypes.STRING
        },
        "idStatus":{
            type:DataTypes.INTEGER
        },
        "telephone":{
            type:DataTypes.INTEGER
        },
        "postalCode":{
            type:DataTypes.INTEGER
        },
        "direction":{
            type:DataTypes.STRING
        },
        "cards":{
            type:DataTypes.INTEGER
        },
    }
    let config = {
        tableName : "",
        timeStamps :false
    }

    let User = sequelize.define(name,cols,config)

    User.associate(models=>{
        
    })

    return User
}