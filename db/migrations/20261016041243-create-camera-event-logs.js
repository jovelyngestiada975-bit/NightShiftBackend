'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('camera_event_logs', {
      log_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      session_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'game_sessions',
          key: 'session_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      camera_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      event_type: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      timestamp: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    await queryInterface.sequelize.query(`
      ALTER TABLE "camera_event_logs"
      ADD CONSTRAINT "camera_event_logs_camera_id_check"
      CHECK ("camera_id" BETWEEN 1 AND 12)
    `);

    await queryInterface.sequelize.query(`
      ALTER TABLE "camera_event_logs"
      ADD CONSTRAINT "camera_event_logs_event_type_check"
      CHECK ("event_type" IN ('viewed', 'corrupted', 'fixed'))
    `);
  },

  async down(queryInterface) {
    await queryInterface.dropTable('camera_event_logs');
  }
};