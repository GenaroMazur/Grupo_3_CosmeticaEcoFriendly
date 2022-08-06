module.exports = function (sequelize, DataTypes) {
    const name = "Card"
    const cols = {
        "numbercard": {
            "primaryKey": true,
            "type": DataTypes.INTEGER,
            "allowNull": false,
            "unique": true
        },
        "expirationdate":{
            "type": DataTypes.DATE,
            "allowNull": false
        },
        "username": {
            "type": DataTypes.STRING(20),
            "allowNull": false
        },
        "cvv": {
            "type": DataTypes.INTEGER,
            "allowNull": false
        },
        "brand": {
            "type": DataTypes.STRING(15),
            "allowNull": false
        },
        "idUser": {
            "type": DataTypes.INTEGER
        }
    }
    const config = {
        "tableName": "cards"
    }

    const Card = sequelize.define(name, cols, config)
    Card.associate = function (models) {
        Card.belongsTo(models.User,{
            "as":"cards",
            "foreignKey":"idUser"
        })
    }

    return Card
}