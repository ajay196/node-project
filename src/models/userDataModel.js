const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize')
const { db } = require('./index')
const UserDataModel = db.sequelize.define('user_data', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name :{
        type: DataTypes.STRING,
        allowNull: true
    },
    adress :{
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    last_login_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    }
},
    {
        engine: 'MYISAM',
        freezeTableName: true,
        timestamps: false
    })
module.exports = UserDataModel;