 'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('game_sessions', {
      session_id: {
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
      night_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: true
      },
      result: {
        type: Sequelize.STRING(20),
        allowNull: true
      }
    });

    await queryInterface.sequelize.query(`
      ALTER TABLE "game_sessions"
      ADD CONSTRAINT "game_sessions_result_check"
      CHECK ("result" IS NULL OR "result" IN ('survived', 'jumpscared'))
    `);
  },

  async down(queryInterface) {
    await queryInterface.dropTable('game_sessions');
  }
};