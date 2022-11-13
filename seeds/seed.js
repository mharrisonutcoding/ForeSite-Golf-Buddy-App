const sequelize = require("../config/connection");
const { User, Attribute } = require("../models");

const userSeedData = require("./user-seeds.json");
const attributeSeedData = require("./attributes-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({
    force: true,
  });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  let index = 0;

  for (const user of users) {
    let { id } = user.dataValues;  
    let newAttribute = await Attribute.create({
        ...attributeSeedData[index],
        user_id: id
    })
    index++;
  }

  process.exit(0);
};

seedDatabase();

// user_id:
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
