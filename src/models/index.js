'use strict'
const env = process.env.NODE_ENV || 'development'
const config = require('../db/config.json')
const Sequelize = require('sequelize')
const currentEnv = config[env]

const sequelize = new Sequelize(currentEnv.database, currentEnv.username, currentEnv.password, currentEnv)
sequelize.authenticate().then(() => { console.log('Connection has been established successfully.') }).catch((err) => { console.log(err)})
const db = {}
db.sequelize = sequelize
module.exports = {db}





