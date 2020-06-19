import Sequelize from 'sequelize'
import allConfigs from '../config/sequelize'
import monthsModel from './months'
import moonsModel from './moons'
import activitiesModel from './activities'

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Months = monthsModel(connection, Sequelize)

const Moons = moonsModel(connection, Sequelize, Months)

const Activities = activitiesModel(connection, Sequelize, Months)

Months.hasMany(Moons)
Months.hasMany(Activities)
Moons.belongsTo(Months)
Activities.belongsTo(Months)

// double check these relationships

export default {
  Months,
  Moons,
  Activities,
}
