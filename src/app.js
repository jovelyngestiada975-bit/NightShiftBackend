
const express = require('express');
const app = express();

app.use(express.json());

const sequelize = require('./config/database');

app.get('/health', async (req, res) => {
    try {
        await sequelize.authenticate();
        res.status(200).json({
            status: 'OK',
            database: 'connected'
        });
    } catch (error) {
        res.status(503).json({
            status: 'ERROR',
            database: 'disconnected'
        });
    }
});

app.get('/api/v1/health', async (req, res) => {
    try {
        await sequelize.authenticate();
        res.status(200).json({
            status: 'OK',
            database: 'connected'
        });
    } catch (error) {
        res.status(503).json({
            status: 'ERROR',
            database: 'disconnected'
        });
    }
});

const gameInfo = {
    name: 'NightShift.exe',
    genre: 'Survival Horror',
    setting: 'Overnight security shift',
    cameras: 12
};

app.get('/game-info', (req, res) => {
    res.json(gameInfo);
});

app.get('/api/v1/game-info', (req, res) => {
    res.json(gameInfo);
});

module.exports = app;
