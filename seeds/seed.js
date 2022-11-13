const sequelize = require('../config/connection');
const {User, Attribute} = require('../models');

const userSeedData = require('./user-seeds.json');
const attributeSeedData = require('./attributes-seeds.json');

// const seedUsers = require('./user-seeds');
// const seedAttr = require('./attributes-seeds');


// const seedAll = async() => {
//     await sequelize.sync({force: true})

//     await seedUsers()
//     await seedAttr()
// }
// seedAll();

// const {User} = require('../models')

// const userData = 

// const seedUsers = () => User.bulkCreate(userData);
// module.exports = seedUsers;

// const {User} = require('../models')

// const userData = 


// const seedUsers = () => User.bulkCreate(userData);
// module.exports = seedUsers;