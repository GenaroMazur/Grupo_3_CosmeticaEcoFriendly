module.exports = function (sequelize, DataTypes) {
    const name = "Order"
    const cols = {
        idProduct : {
            type : DataTypes.INTEGER
        },
        idUser : {
            type : DataTypes.INTEGER
        },
        idDelivery : {
            type : DataTypes.INTEGER
        }
    }
    const config = {
        tableName : "Orders",
        timeStamps : false
    }

    const Order = sequelize.define(name, cols, config)
    Order.associate(models=>{

    })

    return Order
}