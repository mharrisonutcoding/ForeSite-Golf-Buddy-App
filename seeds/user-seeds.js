const {User} = require('../models')

const userData = 
[
    {
        "user_name": "MichaelH",
        "first_name": "Michael",
        "last_name": "Harrison",
        "email": "mharrison@gmail.com",
        "competitive_game": true,
        "relaxed_game": false,
        "drinking": true,
        "high_skill": true,
        "low_skill": false,
        "password": "password123"
      },
      {
        "user_name": "IsaacF",
        "first_name": "Isaac",
        "last_name": "Falcon",
        "email": "isuckatgolf@gmail.com",
        "competitive_game": false,
        "relaxed_game": true,
        "drinking": true,
        "high_skill": false,
        "low_skill": true,
        "password": "password321"
      }
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers