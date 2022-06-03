'use strict'
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.Database, process.env.User, process.env.Password,
    {host: process.env.Host,port: process.env.Port, dialect: 'postgres'})
sequelize.authenticate().then(()=>{console.log('Connection has been established successfully.')})
  const db = {}
  console.log('Connection has been established successfully.')
  db.sequelize = sequelize
 module.exports = { db}





