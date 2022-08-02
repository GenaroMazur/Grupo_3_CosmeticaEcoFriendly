module.exports =function(sequelize,DataTypes){
    let name = "User"
    let cols = {
        "dataCreation":{
            type:DataTypes.DATE
        },
        "username":{
            type:DataTypes.STRING
        },
        "lastname":{
            type:DataTypes.STRING
        },
        "email":{
            type:DataTypes.STRING
        },
        "image":{
            type:DataTypes.STRING
        },
        "idStatusUser":{
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
        }
    }
    let config = {
        tableName : "Users",
        timeStamps :false
    }

    let User = sequelize.define(name,cols,config)

    User.associate(models=>{
        
    })

    return User
}