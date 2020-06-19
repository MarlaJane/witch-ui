export default (connection, Sequelize) => connection.define('Months', {
  id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  affirmation: { type: Sequelize.STRING, allowNull: false },
  slug: { type: Sequelize.STRING, allowNull: false },
}, { paranoid: true })
