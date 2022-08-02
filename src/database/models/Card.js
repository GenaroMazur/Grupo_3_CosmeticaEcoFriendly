module.exports = function (sequelize, DataTypes) {
    const name = "Card"
    const cols = {
        "date" : {
            "type" : DataTypes.DATE
        },
        "name" : {
            "type" : DataTypes.STRING
        },
        "cvv" : {
            "type" : DataTypes.INTEGER
        },
        "brand" : {
            "type" : DataTypes.STRING
        },
        "idUser": {
            "type" : DataTypes.INTEGER
        }
    }
    const config = {
        "tableName" : "Cards",
        "timeStamps" : false
    }

    const Card = sequelize.define (name, cols, config)
    Card.associate (models => {

    })

    return Card 
}