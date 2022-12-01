const sequelize = require("../config/connection");
const bcrypt = require('bcrypt')
const { User, Attribute } = require("../models");

const userSeedData = require("./user-seeds.json");
const attributeSeedData = require("./attributes-seeds.json");

userSeedData.password = bcrypt.hash(userSeedData.password, 10);

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
    await Attribute.create({
        ...attributeSeedData[index],
        user_id: id
    })
    index++;
  }

  process.exit(0);
};

seedDatabase();
