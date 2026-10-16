
require('dotenv').config();
const { Client } = require('pg');

async function main() {
  const client = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 5432),
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'nightshift_dev'
  });

  try {
    await client.connect();
    console.log('Database connected successfully.');

    for (const table of [
      'players',
      'game_sessions',
      'nights',
      'camera_event_logs',
      'scores'
    ]) {
      const result = await client.query(
        `SELECT COUNT(*)::int AS count FROM "${table}"`
      );
      console.log(`${table}: ${result.rows[0].count} record(s)`);
    }
  } catch (error) {
    console.error('Database check failed:', error.message);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
}

main();
