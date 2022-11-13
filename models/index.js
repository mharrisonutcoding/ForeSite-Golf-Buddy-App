const User = require('./User');
const Attribute = require('./Attribute');

User.hasOne(Attribute, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
  Attribute.belongsTo(User, {
    foreignKey: 'user_id',
  });
  

module.exports = {User, Attribute};