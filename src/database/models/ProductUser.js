module.exports=function(sequelize,DataTypes){

    let name="ProductUser"
    let cols = {
        idDelivery:{
            type:DataTypes.INTEGER
        },
        quantity :{
            type:DataTypes.INTEGER
        },
        totalPrice:{
            type:DataTypes.INTEGER
        },
        createAt:{
            type:DataTypes.DATE
        },
        idStatus:{
            type:DataTypes.INTEGER
        }
    }
    let config = {
        tableName:"productUser",
        timestamps:false
    }

    const ProductUser = sequelize.define(name,cols,config)

    sequelize.associate = function(models){
        ProductUser.belongsTo(models.Delivery,{
            "as" : "delivery",
            "foreignKey" : "idDelivery"
        })

        ProductUser.belongsTo(models.statusCart,{
            "as" : "statusCart",
            "foreignKey" : "idStatus"
        })

    }

    return ProductUser
}