const seedUsers = require('./user-seeds')



const sequelize = require('../config/connection')

const seedAll = async() => {
    await sequelize.sync({force: true})

    await seedUsers()
}
seedAll();