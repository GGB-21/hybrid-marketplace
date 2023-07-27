const { User } = require('./user')
const { Catalog } = require('./catalog')
const { Product } = require('./product')
const { Order } = require('./order')
const { OrderDetails } = require('./order_details')
const { sequelize } = require('../config/database')

function MigrateDatabaseTables(){
    return new Promise((resolve, reject) => {
        sequelize.sync().then(() => {
            console.log('Successfully Synced MySQL DB Tables');
            resolve('success')
        }).catch((error) => {
            console.log('Error syncing MySQL DB Tables - ', JSON.stringify(error))
            reject('failed')
        })
    })
}


module.exports = {
    User,
    Catalog,
    Product,
    Order,
    OrderDetails,
    MigrateDatabaseTables
}
