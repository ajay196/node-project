const { DataTypes } = require('sequelize');
const db = require('./index')
console.log(db);
const UserModel = db.sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
});

UserModel.sync({ force: true });
module.exports = UserModel;