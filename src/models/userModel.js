const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize')
const {db} = require('./index')
const UserModel = db.sequelize.define('Users', {
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING
  },
  type:{
    type:DataTypes.INTEGER,
    defaultValue:'1'
  },
  otp: {
    type: DataTypes.INTEGER
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue:Sequelize.fn('now')
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue:Sequelize.fn('now')
  }
},
{
  engine:'MYISAM',
  freezeTableName: true,
  timestamps: false
})
module.exports = UserModel;