 'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('scores', {
      score_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      player_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'players',
          key: 'player_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      best_night_reached: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      total_survival_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('scores');
  }
};