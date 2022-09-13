module.exports = function (sequelize, DataTypes) {
    const name = "Cart";
    const cols = {
        "idUser":{
            type:DataTypes.INTEGER
        },
        "idDelivery":{
            type:DataTypes.INTEGER
        },
        "idStatus":{
            type:DataTypes.INTEGER
        },
        "totalPrice":{
            type:DataTypes.INTEGER
        }
    };
    const config = {
        "tableName": "Cart",
        "timestamps": false
    };

    const Cart = sequelize.define(name, cols, config);

    sequelize.associate = function(models){

        Cart.belongsTo(models.User,{
            "as":"user",
            "foreignKey": "idUser"
        });

        Cart.belongsTo(models.Delivery,{
            "as":"delivery",
            "foreignKey":"idDelivery"
        });

        Cart.belongsTo(models.StatusCart,{
            "as":"status",
            "foreignKey":"idStatus"
        });

        Cart.belongsToMany(models.Product,{
            "through":"ProductCart",
            "foreignKey":"idCart",
            "otherKey":"idProduct",
            "as":"ProductCart"
        });
    };

    return Cart
}