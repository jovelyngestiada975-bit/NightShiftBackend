
'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('players', [{
      player_id: 1,
      username: 'nightguard01',
      email: 'nightguard01@example.com',
      created_at: new Date()
    }]);

    await queryInterface.bulkInsert('game_sessions', [{
      session_id: 1,
      player_id: 1,
      night_number: 1,
      start_time: new Date(),
      end_time: new Date(),
      result: 'survived'
    }]);

    await queryInterface.bulkInsert('nights', [{
      night_id: 1,
      session_id: 1,
      difficulty_level: 1,
      route_taken: 'A',
      hazards_triggered: 'none'
    }]);

    await queryInterface.bulkInsert('camera_event_logs', [{
      log_id: 1,
      session_id: 1,
      camera_id: 1,
      event_type: 'viewed',
      timestamp: new Date()
    }]);

    await queryInterface.bulkInsert('scores', [{
      score_id: 1,
      player_id: 1,
      best_night_reached: 1,
      total_survival_time: 600
    }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('scores', null, {});
    await queryInterface.bulkDelete('camera_event_logs', null, {});
    await queryInterface.bulkDelete('nights', null, {});
    await queryInterface.bulkDelete('game_sessions', null, {});
    await queryInterface.bulkDelete('players', null, {});
  }
};
