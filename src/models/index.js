const sequelize = require('../config/db');

const User = require('./User');
const Content = require('./Content');

// Relations
User.hasMany(Content, { foreignKey: 'uploaded_by' });
Content.belongsTo(User, { foreignKey: 'uploaded_by' });

module.exports = {
  sequelize,
  User,
  Content
};