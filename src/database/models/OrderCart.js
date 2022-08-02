module.exports = function (sequelize, DataTypes) {
    const name = "OrderCart"
    const cols = {
        "idOrder":{
            type:DataTypes.INTEGER
        },
        "idCart":{
            type:DataTypes.INTEGER
        }
    }
    const config = {
        tableName:"OrderCart",
        timeStamps : false
    }

    const OrderCart = sequelize.define(name, cols, config)

    OrderCart.associate(models=>{
        
    })

    return OrderCart 
}