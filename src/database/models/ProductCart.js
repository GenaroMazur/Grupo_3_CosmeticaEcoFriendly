module.exports = function (sequelize, DataTypes) {

    let name = "ProductCart";
    let cols = {
        quantity: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        tableName: "productCart",
        timestamps: false
    };

    const ProductCart = sequelize.define(name, cols, config);


    return ProductCart
}